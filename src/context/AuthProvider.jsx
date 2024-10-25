import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [userSession, setUserSession] = useState({
		token: true,
		username: 'test_123',
		email: 'test@test.com',
		roles: ['customer', 'admin'],
	});

	return (
		<AuthContext.Provider value={{ userSession }}>
			{children}
		</AuthContext.Provider>
	);
};
