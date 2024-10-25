import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

export const useCart = () => {
	const { cart } = useContext(CartContext);

	return {
		cart,
	};
};
