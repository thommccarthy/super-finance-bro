import React from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../../supabaseClient';

const withAuth = (Component: React.FC) => {
  const AuthenticatedComponent: React.FC = (props) => {
    const router = useRouter();
    const [authenticated, setAuthenticated] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const checkAuth = async () => {
        const { data: user, error } = await supabase.auth.getUser();

        if (user) {
          setAuthenticated(true);
          console.log(user);
        } else {
          router.replace('/login');
          console.log(user);
        }
        setLoading(false);
      };

      checkAuth();
    }, [router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return authenticated ? <Component {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
