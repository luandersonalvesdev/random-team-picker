import PlayersList from '../../components/PlayersList'
import PlayerAdder from '../../components/PlayerAdder'
import Teams from '../../components/Teams'
import Header from '../../components/Header'

export default function Dashboard() {

  return (
    <main className='flex flex-col justify-start w-screen p-[2%]'>
      <div className='flex flex-col justify-start rounded bg-white p-12'>
        <Header />
        <PlayerAdder />
        <PlayersList />
        <Teams />
      </div>
    </main>
  )
}
