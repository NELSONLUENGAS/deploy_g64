import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

export const useAuth = () => {
	const { userSession, handleSession, isLoading } = useContext(AuthContext);

	return {
		userSession,
		handleSession,
		isLoading,
	};
};
