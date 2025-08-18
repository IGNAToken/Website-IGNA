import Badge from '@/components/shared/Badge'

const Motto = () => {
  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>Project Essentials</Badge>
      <div className='text-center text-lg font-light border border-primary/30 rounded-xl p-6 bg-gradient-to-tl to-background from-primary/10 max-w-2xl'>
        By investing in <span className='text-primary font-bold'>$IGNA</span>, you're not just buying crypto — you are
        contributing to the creation of pyrolysis plants that turn waste plastic into oil, reducing global pollution.
        Your investment supports worldwide adoption of this technology, promoting a cleaner environment. Join us by
        buying our crypto and make a positive impact today!
      </div>
    </section>
  )
}

export default Motto
