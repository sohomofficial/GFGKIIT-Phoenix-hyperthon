import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className='grid items-center justify-center min-h-screen px-6 py-24 sm:py-32 lg:px-8'>
      <SignIn />
    </div>
  );
}
