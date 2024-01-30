import PlayersList from '../../components/PlayersList'
import PlayerAdder from '../../components/PlayerAdder'
import Logout from '../../components/Logout'
import Teams from '../../components/Teams'

export default function Dashboard() {

  return (
    <div>
      <Logout />
      <h1>Dashboard</h1>
      <PlayerAdder />
      <PlayersList />
      <Teams />
    </div>
  )
}
