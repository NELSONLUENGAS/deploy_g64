import { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';

export const useProduct = () => {
	const { products } = useContext(ProductContext);

	return {
		products,
	};
};
