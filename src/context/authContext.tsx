import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  favorites: number[];
  toggleFavorite: (carId: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const login = (email: string, password: string) => {
    const mockUser = {
      email: "admin@vix.com.br",
      password: "admin",
    };
    if (email === mockUser.email && password === mockUser.password) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    } else {
      console.log("Credenciais inválidas");
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const storedAuthUser = localStorage.getItem("isAuthenticated");
    if (storedAuthUser === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleFavorite = (carId: number) => {
    if (!favorites.includes(carId)) {
      setFavorites((prevFavorites) => [...prevFavorites, carId]);
    } else {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((id) => id !== carId)
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, favorites, toggleFavorite }}
    >
      {children}
    </AuthContext.Provider>
  );
};
