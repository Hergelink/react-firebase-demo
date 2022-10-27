import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

function Navbar() {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div id='navbar'>
      <div className='links'>
        <Link to='/'>Home Page</Link>
        {!user ? (
          <Link to='/login'>Login</Link>
        ) : (
          <Link to='/createpost'>Create Post</Link>
        )}
      </div>
      {user && (
        <div id='user-info'>
          <p>{user?.displayName}</p>
          <img src={user?.photoURL || ''} />
          <button onClick={signUserOut} id='logout-btn'>Log Out</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
