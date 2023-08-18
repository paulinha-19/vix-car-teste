export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  description: string;
  features: string[];
}

export interface CarListItemProps {
  car: Car;
  onFavoriteClick: () => void;
  isFavorite?: boolean;
  onClick?: () => void;
}
