import SignupForm from '../../components/SignupForm';
import JoinAsGuest from '../../components/JoinAsGuest';

export default function Signup() {
  return (
    <main className='flex flex-col justify-center w-screen h-screen items-center bg-main-app-200'>
      <div className='flex flex-col justify-center items-center bg-white rounded-lg py-6 px-8 shadow-md min-w-80 max-w-64'>
        <SignupForm />
        <JoinAsGuest />
      </div>
    </main>
  )
}
