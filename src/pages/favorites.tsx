import React, { useEffect } from 'react';
import { VStack, SimpleGrid } from '@chakra-ui/react';
import CarListItem from '../components/carListItem';
import NavigationMenu from '../components/navigationMenu';
import { Cars } from '../data/carAtData';
import { AuthProvider, useAuth } from '../context/authContext';

export const Favorites: React.FC = () => {
  const { favorites, loadFavorites } = useAuth();
  const favoriteCars = Cars.filter((car) => favorites.includes(car.id));

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <AuthProvider>
      <VStack spacing={4} align="stretch" p={4}>
        <NavigationMenu />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mb={4}>
          {favoriteCars.map((car) => (
            <CarListItem
              key={car.id}
              car={car}
              onFavoriteClick={() => {}}
              isFavorite={true} // Marca o carro como favorito para o ícone
            />
          ))}
        </SimpleGrid>
      </VStack>
    </AuthProvider>
  );
};

export default Favorites;
