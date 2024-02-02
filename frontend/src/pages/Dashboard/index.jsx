import PlayersList from '../../components/PlayersList'
import PlayerAdder from '../../components/PlayerAdder'
import Teams from '../../components/Teams'
import Header from '../../components/Header'

export default function Dashboard() {

  return (
    <main className='flex flex-col justify-center w-screen p-12'>
      <div className='flex flex-col justify-center rounded bg-white p-12'>
        <Header />
        <PlayerAdder />
        <PlayersList />
        <Teams />
      </div>
    </main>
  )
}
