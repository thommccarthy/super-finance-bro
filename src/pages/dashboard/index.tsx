import React from 'react';
import withAuth from '../../components/auth/withAuth';
import { supabase } from '../../../supabaseClient';
import useSignOut from '@/hooks/useSignOut';

type Props = {};

const Dashboard = (props: Props) => {
  const signOut = useSignOut();
  return (
    <div>
      Signed In!
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default withAuth(Dashboard);
