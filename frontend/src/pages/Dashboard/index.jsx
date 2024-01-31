import PlayersList from '../../components/PlayersList'
import PlayerAdder from '../../components/PlayerAdder'
import Teams from '../../components/Teams'
import Header from '../../components/Header'

export default function Dashboard() {

  return (
    <div>
      <Header />
      <PlayerAdder />
      <PlayersList />
      <Teams />
    </div>
  )
}
