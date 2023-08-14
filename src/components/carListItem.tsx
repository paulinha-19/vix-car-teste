// src/components/CarListItem.tsx
import React from 'react';
import { Box, Image, Text, IconButton } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { Car } from '../data/carAtData';
import { useAuth } from '../context/authContext';

export interface CarListItemProps {
  car: Car; 
  onFavoriteClick: () => void;
  isFavorite?: boolean;
  onClick?: () => void;
}

const CarListItem: React.FC<CarListItemProps> = ({ car, onFavoriteClick }) => {
  const { favorites } = useAuth(); 
  const isFavorite = favorites.includes(car.id);
  const formattedPrice = car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  
  return (
    <Box p={4} borderWidth="1px" borderRadius="md">
      <Image borderRadius={5} src={`${car.image}`} alt={`${car.brand} ${car.model}`} />
      <Text mt={5}>{car.brand}</Text>
      <Text>{car.model}</Text>
      <Text>{car.year}</Text>
      <Text>{formattedPrice}</Text>
      <IconButton
        mt={5}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        icon={<FaHeart color={isFavorite ? 'red' : 'gray'} />}
        onClick={onFavoriteClick}
      />
    </Box>
  );
};

export default CarListItem;
