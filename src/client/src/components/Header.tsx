import React from 'react';
import { useAuth } from 'core/auth/useAuth';

export function Header() {
  const user = useAuth()
  return (
    <div >
      {user?.name}
   </div>
  );
}

