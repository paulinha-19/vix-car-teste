import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void; 
  favorites: number[];
  addFavorite?: (carId: number) => void;
  removeFavorite?: (carId: number) => void;
  loadFavorites: () => void;  
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export interface AuthProviderProps {
  children: ReactNode; 
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [favorites, setFavorites] = useState<number[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const login = (email: string, password: string) => {
    const mockUser = {
      email: 'admin@vix.com.br',
      password: 'admin',
    };

    if (email === mockUser.email && password === mockUser.password) {
      setIsAuthenticated(true);
    } else {
      console.log('Credenciais inválidas');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const loadFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  };

  const saveFavoritesToLocalStorage = (favorites: number[]) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const addFavorite = (carId: number) => {
    const updatedFavorites = [...favorites, carId];
    setFavorites(updatedFavorites);
    saveFavoritesToLocalStorage(updatedFavorites);
  };

  const removeFavorite = (carId: number) => {
    const updatedFavorites = favorites.filter(id => id !== carId);
    setFavorites(updatedFavorites);
    saveFavoritesToLocalStorage(updatedFavorites);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, favorites, addFavorite, removeFavorite, loadFavorites }}>
      {children}
    </AuthContext.Provider>
  );
};
