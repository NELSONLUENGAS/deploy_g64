import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = ({ children, isAllow, redirectTo = '/' }) => {
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
