import logo from '@/assets/logo.png'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div>
      <img src={logo} alt='logo' className={className} />
    </div>
  )
}

export default Logo
