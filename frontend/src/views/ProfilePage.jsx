import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

export const ProfilePage = () => {
	const { userSession } = useAuth();

	useEffect(() => {
		if (userSession) {
			console.log('Sesión de usuario:', userSession);
		}
	}, [userSession]);

	return <div>ProfilePage</div>;
};
