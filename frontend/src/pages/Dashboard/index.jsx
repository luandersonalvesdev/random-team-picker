import PlayersList from '../../components/PlayersList'
import PlayerAdder from '../../components/PlayerAdder'
import Teams from '../../components/Teams'
import Header from '../../components/Header'

export default function Dashboard() {

  return (
    <main className='flex flex-col justify-center w-screen p-[2%]'>
      <div className='flex flex-col justify-center rounded bg-white p-12 min-h-screen'>
        <Header />
        <PlayerAdder />
        <PlayersList />
        <Teams />
      </div>
    </main>
  )
}
