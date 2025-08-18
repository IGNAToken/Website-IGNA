type Props = {
  img: string
  name: string
  role: string
}

const TeamMember = ({ img, name, role }: Props) => {
  return (
    <div className='flex flex-col items-center gap-4 max-w-40 w-full text-center'>
      <div className=' flex items-center justify-center size-[134px] bg-gradient-to-b from-primary to-[#00FFFD] rounded-full'>
        <img src={img} alt={name} className='size-32 rounded-full object-cover' />
      </div>

      <div className='flex flex-col items-center justify-center gap-1'>
        <div className='text-xl font-bold'>{name}</div>
        <div className='text-md text-white/75 max-w-40 text-center'>{role}</div>
      </div>
    </div>
  )
}

export default TeamMember
