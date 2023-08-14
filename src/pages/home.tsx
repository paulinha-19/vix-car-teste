import React, { useState } from 'react';
import { VStack, Input, SimpleGrid, ChakraProvider} from '@chakra-ui/react';
import CarListItem from '../components/carListItem';
import NavigationMenu from '../components/navigationMenu';
import { Cars, Car } from '../data/carAtData';

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (carId: number) => {
    if (favorites.includes(carId)) {
      setFavorites(favorites.filter(id => id !== carId));
    } else {
      setFavorites([...favorites, carId]);
    }
  };

  const filteredCars = Cars.filter((car: Car) =>
    car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const favoriteCars = filteredCars.filter((car: Car) => favorites.includes(car.id));
  const nonFavoriteCars = filteredCars.filter((car: Car) => !favorites.includes(car.id));

  return (
    <ChakraProvider>
      <VStack spacing={4} align="stretch" p={4}>
        <NavigationMenu />
        <Input
          placeholder="Buscar carros por marca ou modelo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          maxW="sm"
        />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mb={4}>
        {favoriteCars.map((car: Car) => (
            <CarListItem
              key={car.id}
              car={car}
              onFavoriteClick={() => toggleFavorite(car.id)}
            />
          ))}
          {nonFavoriteCars.map((car: Car) => (
            <CarListItem
              key={car.id}
              car={car}
              onFavoriteClick={() => toggleFavorite(car.id)}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </ChakraProvider>
  );
};

export default Home;