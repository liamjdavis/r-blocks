import React from 'react';
import { signInWithGoogle } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './modules/styles/base.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    await signInWithGoogle();
    navigate('/studio');
  };

  return (
    <div className="core">
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: '2rem',
          background: 'var(--text-extra)'
        }}
      >
        <h1 className="header">R-Blocks Studio</h1>
        <Button 
          variant="contained" 
          onClick={handleLogin}
          sx={{
            backgroundColor: 'var(--secondary-h)',
            borderTop: '2px solid var(--secondary-m)',
            borderLeft: '2px solid var(--secondary-m)',
            fontFamily: 'Roboto Mono',
            fontSize: '1rem',
            padding: '1rem 2rem',
            '&:hover': {
              backgroundColor: 'var(--secondary-m)',
              borderColor: 'var(--secondary-l)'
            }
          }}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}