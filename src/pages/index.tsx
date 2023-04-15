import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-6xl font-bold'>Super Finance Bro</h1>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold'>Welcome to Super Finance Bro</h2>
        <p className='text-xl'>
          Super Finance Bro is a personal finance app that helps you track your
          spending and income.
        </p>
      </div>
      {/* to signup page */}
      <Link href='/signup'>Sign up</Link>
    </main>
  );
}
