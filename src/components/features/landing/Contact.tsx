import Badge from '@/components/shared/Badge'
import SectionTitle from '@/components/shared/SectionTitle'
import background from '@/assets/contact-bg.png'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'
import type { ReCAPTCHA } from 'react-google-recaptcha'
import ReCAPTCHAComponent from 'react-google-recaptcha'
import { RECAPTCHA_SITE_KEY } from '@/config'
import { api } from '@/api/axios'

interface IContactFormData {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const captchaRef = useRef<ReCAPTCHA>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [captchaStatus, setCaptchaStatus] = useState<string | null>(null)

  const [formStatus, setFormStatus] = useState<string | null>(null)

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactFormData>()

  const onSubmit = async (data: IContactFormData) => {
    setIsSubmitting(true)
    if (!captchaToken) {
      setCaptchaStatus('Please complete the CAPTCHA.')
      return
    }

    try {
      const response = await api.post<{ status: number }>('/api/contact-forms', {
        data: { ...data, captchaToken },
      })
      console.log('response', response)
      if (response) {
        reset()
        setFormStatus('Message sent successfully!')
      } else {
        setFormStatus('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (formStatus) {
      setTimeout(() => {
        setFormStatus(null)
      }, 5000)
    }
  }, [formStatus])

  return (
    <section className='flex flex-col items-center justify-center gap-12 px-4 mt-32 relative mb-20'>
      <div className='absolute top-0 left-0 md:w-4/5 w-full h-full flex items-center'>
        <img src={background} alt='contact' />
      </div>
      <Badge>Contact</Badge>
      <SectionTitle title='Reach out to us' subtitle='' />

      <div className='flex flex-col items-center justify-center gap-4'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='md:min-w-[400px] flex flex-col items-center justify-center gap-4 bg-black/50 p-10 rounded-lg backdrop-blur-sm border border-primary/20'
        >
          <div className='w-full'>
            <Input
              type='text'
              placeholder='Name'
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' },
              })}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
          </div>

          <div className='w-full'>
            <Input
              type='email'
              placeholder='Email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
          </div>

          <div className='w-full'>
            <Textarea
              placeholder='Message'
              {...register('message', {
                required: 'Message is required',
                minLength: { value: 10, message: 'Message must be at least 10 characters' },
              })}
              className={errors.message ? 'border-red-500' : ''}
            />
            {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message.message}</p>}
          </div>

          <ReCAPTCHAComponent sitekey={RECAPTCHA_SITE_KEY} ref={captchaRef} onChange={handleCaptchaChange} />
          {captchaStatus && <p className='text-red-500 text-sm mt-1'>{captchaStatus}</p>}

          <Button type='submit' className='mt-4' size='sm' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
          {formStatus && (
            <p className={`${formStatus.includes('success') ? 'text-green-500' : 'text-red-500'} text-sm mt-1`}>
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
