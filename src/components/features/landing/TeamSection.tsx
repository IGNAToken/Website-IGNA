import Badge from '@/components/shared/Badge'
import SectionTitle from '@/components/shared/SectionTitle'
import TeamMember from '@/components/shared/TeamMember'
import useTeam from '@/hooks/useTeam'
import withLoading from '@/components/shared/withLoading'
import type { Team } from '@/types/Team'

const TeamSection = () => {
  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>Team</Badge>
      <SectionTitle title='Meet the team' subtitle='' />
      <TeamContentWithLoading />
    </section>
  )
}

const TeamContent = ({ team }: { team: Team[] }) => {
  return (
    <div className='flex flex-wrap gap-10 max-w-2xl justify-center'>
      {team
        .sort((a, b) => a.order - b.order)
        .map((member) => (
          <TeamMember key={member.id} img={member.avatar.url} name={member.name} role={member.position} />
        ))}
    </div>
  )
}

const TeamContentWithLoading = () => {
  const { isLoading, error, refetch, data } = useTeam()
  const WrappedTeamContent = withLoading(TeamContent)
  return <WrappedTeamContent isLoading={isLoading} error={error} refetch={refetch} team={data || []} />
}

export default TeamSection
