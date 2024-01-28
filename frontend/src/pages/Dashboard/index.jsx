import PlayersList from '../../components/PlayersList'
import PlayerAdder from '../../components/PlayerAdder'

export default function Dashboard() {

  return (
    <div>
      <h1>Dashboard</h1>
      <PlayerAdder />
      <PlayersList />
    </div>
  )
}
