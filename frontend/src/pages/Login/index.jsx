import LoginForm from '../../components/LoginForm'
import JoinAsGuest from '../../components/JoinAsGuest'

export default function Login() {

  return (
    <main className='flex flex-col justify-center w-screen h-screen items-center bg-gray-100'>
      <div className='flex flex-col justify-center items-center bg-white rounded-lg pt-8 shadow-md'>
        <LoginForm />
        <JoinAsGuest />
      </div>
    </main>
  )
}
