import { useRouter } from 'next/router';
import { supabase } from '../../supabaseClient';

const useSignOut = () => {
  const router = useRouter();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      // Redirect the user to the login page after signing out
      router.push('/login');
    }
  };

  return signOut;
};

export default useSignOut;
