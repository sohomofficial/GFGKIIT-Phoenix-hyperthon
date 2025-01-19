import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className='grid items-center justify-center min-h-screen px-6 py-24 sm:py-32 lg:px-8'>
      <SignUp />
    </div>
  );
}
