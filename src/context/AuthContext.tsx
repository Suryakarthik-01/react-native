import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
  signup: (username: string) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
  signup: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string) => {
    setUser(username);
    setLoggedIn(true);
  };

  const signup = (username: string) => {
    setUser(username);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
