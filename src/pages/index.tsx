import Link from 'next/link';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  const providers: [] = [];

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-9 text-center'>
      <h1 className='text-6xl font-bold my-8'>Super Finance Bro</h1>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold my-4'>
          Welcome to Super Finance Bro
        </h2>
        <p className='text-xl'>
          Super Finance Bro is a personal finance app that helps you track your
          spending and income.
        </p>
      </div>
      {/* to signup page */}
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme='dark'
          providers={providers}
        />
      ) : (
        <Link href='/dashboard'>Go to Dashboard</Link>
      )}

      <button onClick={() => supabase.auth.signOut()}>Sign out</button>
    </main>
  );
}
