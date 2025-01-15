import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { signOut } from '../firebase';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <Button 
      onClick={handleLogout}
      className="base-button"
      sx={{
        marginLeft: 'auto',
        marginRight: '1rem',
        backgroundColor: 'var(--secondary-h)',
        '&:hover': {
          backgroundColor: 'var(--secondary-m)',
        }
      }}
    >
      Logout
    </Button>
  );
}