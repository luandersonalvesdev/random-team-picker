import SignupForm from '../../components/SignupForm';
import JoinAsGuest from '../../components/JoinAsGuest';

export default function Signup() {
  return (
    <main className='flex flex-col justify-center w-screen h-screen items-center px-4'>
      <div className='flex flex-col justify-center items-center bg-white rounded-lg py-6 px-8 shadow-md'>
        <SignupForm />
        <JoinAsGuest />
      </div>
    </main>
  )
}
