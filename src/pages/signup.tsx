import { useState } from 'react';
import { supabase } from '../../supabaseClient';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert('Error signing up: ' + error.message);
    } else {
      alert('Signup successful! Check your email for a confirmation link.');
    }
  };

  const isLoggedIn = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      console.log('user is logged in');
    } else {
      console.log('user is not logged in');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type='submit'>Sign up</button>
      </form>
      <button onClick={isLoggedIn}>Check if logged in</button>
    </div>
  );
};

export default Signup;
