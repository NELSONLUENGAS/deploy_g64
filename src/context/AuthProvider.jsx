import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [userSession, setUserSession] = useState({
		token: false,
		username: '',
		email: '',
		roles: ['customer', 'admin'],
	});

	const handleSession = (session) => {
		setUserSession({
			...userSession,
			...session,
		});
	};

	return (
		<AuthContext.Provider value={{ userSession, handleSession }}>
			{children}
		</AuthContext.Provider>
	);
};
