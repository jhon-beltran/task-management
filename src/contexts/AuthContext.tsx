import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserManager, WebStorageStateStore } from 'oidc-client-ts';
import { oidcConfig } from '../config/authConfig';

const userManager = new UserManager({
  ...oidcConfig,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
});

interface AuthContextType {
  user: any; // Replace with a proper type
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    userManager.getUser().then((user) => {
      if (user) setUser(user);
    });
  }, []);

  const login = () => userManager.signinRedirect();
  const logout = () => userManager.signoutRedirect();

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};