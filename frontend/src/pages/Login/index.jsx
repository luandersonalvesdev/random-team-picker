import LoginForm from '../../components/LoginForm'
import JoinAsGuest from '../../components/JoinAsGuest'

export default function Login() {

  return (
    <main className='flex flex-col justify-center w-screen h-screen items-center'>
      <div className='flex flex-col justify-center items-center bg-white rounded-lg py-6 px-8 shadow-md min-w-96 max-w-64'>
        <LoginForm />
        <JoinAsGuest />
      </div>
    </main>
  )
}
