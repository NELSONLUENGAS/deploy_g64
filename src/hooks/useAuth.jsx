import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

export const useAuth = () => {
	const { userSession } = useContext(AuthContext);

	return {
		userSession,
	};
};
