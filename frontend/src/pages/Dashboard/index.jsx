import PlayersList from '../../components/PlayersList'
import PlayerAdder from '../../components/PlayerAdder'
import Logout from '../../components/Logout'
import Teams from '../../components/Teams'
import Header from '../../components/Header'

export default function Dashboard() {

  return (
    <div>
      <Header />
      <Logout />
      <PlayerAdder />
      <PlayersList />
      <Teams />
    </div>
  )
}
