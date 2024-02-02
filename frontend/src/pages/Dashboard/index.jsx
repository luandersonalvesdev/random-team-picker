import PlayersList from '../../components/PlayersList'
import PlayerAdder from '../../components/PlayerAdder'
import Teams from '../../components/Teams'
import Header from '../../components/Header'

export default function Dashboard() {

  return (
    <main>
      <div className='flex flex-col justify-center w-screen items-center bg-main-app-200 min-w-80 max-w-64'>
        <Header />
        <PlayerAdder />
        <PlayersList />
        <Teams />
      </div>
    </main>
  )
}
