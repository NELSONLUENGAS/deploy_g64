import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const AuthGuard = ({ children, isAllow, redirectTo = '/' }) => {
	const { isLoading } = useAuth();

	if (isLoading) {
		return <p>Cargando...</p>;
	}

	if (!isAllow) {
		return (
			<Navigate
				to={redirectTo}
				replace
			/>
		);
	}

	return children ? children : <Outlet />;
};
