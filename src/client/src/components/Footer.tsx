import React from 'react';
import { useAuth } from 'core/auth/useAuth';

export function Footer() {
  const user = useAuth()
  return (
    <div >
      {user?.userName}
   </div>
  );
}

