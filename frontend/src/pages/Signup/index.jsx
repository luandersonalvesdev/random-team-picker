import SignupForm from '../../components/SignupForm';
import JoinAsGuest from '../../components/JoinAsGuest';

export default function Signup() {
  return (
    <main className='flex flex-col justify-center h-screen items-center'>
      <div className='flex flex-col justify-center items-center bg-white rounded-lg py-6 px-11 shadow-md min-w-96 max-w-64'>
        <SignupForm />
        <JoinAsGuest />
      </div>
    </main>
  )
}
