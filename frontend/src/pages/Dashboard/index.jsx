import PlayersList from '../../components/PlayersList'
import PlayerAdder from '../../components/PlayerAdder'
import Logout from '../../components/Logout'

export default function Dashboard() {

  return (
    <div>
      <Logout />
      <h1>Dashboard</h1>
      <PlayerAdder />
      <PlayersList />
    </div>
  )
}
