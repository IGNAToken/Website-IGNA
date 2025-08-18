import { API_URL } from '@/config'
import { debug } from '@/lib/logging'
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

const axiosInstance = axios.create({
  baseURL: API_URL,
})

export const apiRequest = async <T>(endpoint: string, config: AxiosRequestConfig = {}): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance({
      url: endpoint,
      ...config,
    })
    debug(`apiRequest ${endpoint}`, response)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API request failed: ${error.message}`)
    }
    throw error
  }
}

const fetchAllData = async <T>(endpoint: string, config: AxiosRequestConfig = {}): Promise<T[]> => {
  const allItems: T[] = []
  let page = 1
  let totalPages = 1

  do {
    const currentConfig = {
      ...config,
      params: {
        ...config.params,
        page: page > 1 ? page : undefined,
      },
    }

    const response = await apiRequest<{ data: T[]; meta: { pagination: { pageCount: number } } }>(
      endpoint,
      currentConfig
    )
    totalPages = response.meta.pagination.pageCount * 1
    allItems.push(...response.data)
    page++
  } while (page <= totalPages)
  debug(`fetchAllData ${endpoint}`, allItems)
  return allItems
}

interface PaginationInfo {
  page: number
  pageCount: number
  pageSize: number
  total: number
}

const fetchNextPage = async <T>(
  endpoint: string,
  paginationInfo: PaginationInfo,
  config: AxiosRequestConfig = {}
): Promise<T[]> => {
  const response = await apiRequest<T[]>(endpoint, {
    ...config,
    params: {
      ...paginationInfo,
      page: paginationInfo.page,
    },
  })
  debug(`fetchNextPage ${endpoint}`, response)
  return response
}

const post = async <T>(endpoint: string, data: any, config: AxiosRequestConfig) => {
  const response = await apiRequest<T>(endpoint, { ...config, method: 'POST', data })
  debug(`post ${endpoint}`, response)
  return response
}

export const api = {
  get: <T>(endpoint: string, config?: AxiosRequestConfig) => apiRequest<T>(endpoint, { ...config, method: 'GET' }),
  getAll: <T>(endpoint: string, config?: AxiosRequestConfig) => fetchAllData<T>(endpoint, { ...config, method: 'GET' }),
  post: <T>(endpoint: string, data: any, config?: AxiosRequestConfig) =>
    post<T>(endpoint, data, { ...config, method: 'POST' }),
  getNextPage: <T>(endpoint: string, paginationInfo: PaginationInfo, config?: AxiosRequestConfig) =>
    fetchNextPage<T>(endpoint, paginationInfo, { ...config, method: 'GET' }),
}
