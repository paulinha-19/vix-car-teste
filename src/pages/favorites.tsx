import React from "react";
import { VStack, SimpleGrid, Text } from "@chakra-ui/react";
import NavigationMenu from "../components/navigationMenu";
import { useAuth } from "../context/authContext";
import { Cars } from "../data/carAtData";
import CarListItem from "../components/carListItem";

export const Favorites: React.FC = () => {
  const { favorites } = useAuth();
  const favoriteCars = Cars.filter((car) => favorites.includes(car.id));

  return (
    <VStack spacing={4} align="stretch" p={4}>
      <NavigationMenu />
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mb={4}>
        {favoriteCars.length === 0 ? (
          <Text as="p">Nenhum favorito adicionado</Text>
        ) : (
          favoriteCars.map((car) => <CarListItem key={car.id} car={car} />)
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default Favorites;
