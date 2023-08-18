// src/components/CarListItem.tsx
import React from "react";
import { Box, Image, Text, IconButton } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { Car } from "../interface/index";
import { useAuth } from "../context/authContext";

export interface CarListItemProps {
  car: Car;
}

const CarListItem: React.FC<CarListItemProps> = ({ car }) => {
  const { favorites, toggleFavorite } = useAuth();
  const isFavorite = favorites.includes(car.id);
  const formattedPrice = car.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Image
        borderRadius={5}
        src={`${car.image}`}
        alt={`${car.brand} ${car.model}`}
      />
      <Text mt={5}>{car.brand}</Text>
      <Text>{car.model}</Text>
      <Text>{car.year}</Text>
      <Text>{formattedPrice}</Text>
      <IconButton
        onClick={() => toggleFavorite(car.id)}
        mt={5}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        icon={<FaHeart color={isFavorite ? "red" : "gray"} />}
      />
    </Box>
  );
};

export default CarListItem;
