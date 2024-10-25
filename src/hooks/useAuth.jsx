import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

export const useAuth = () => {
	const { userSession, handleSession } = useContext(AuthContext);

	return {
		userSession,
		handleSession,
	};
};
