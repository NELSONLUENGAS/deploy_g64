import { createContext, useEffect, useState } from 'react';
import { useStorage } from '../hooks/useStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const { handleGetStorageSession, handleSetStorageSession, decrypted } =
		useStorage();

	const [userSession, setUserSession] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const handleSession = (session) => {
		setUserSession(session);
		handleSetStorageSession(session);
	};

	useEffect(() => {
		handleGetStorageSession();
	}, []);

	useEffect(() => {
		if (decrypted) {
			setUserSession(JSON.parse(decrypted));
		}

		setTimeout(() => {
			setIsLoading(false);
		}, 10);
	}, [decrypted]);

	return (
		<AuthContext.Provider value={{ userSession, handleSession, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
};
