import React, { useState } from 'react';
import { useEncrypt } from './useEncrypt';

export const useStorage = () => {
	const { encrypted, decrypted, handleEncrypt, handleDecrypt } = useEncrypt();
	const [sessionStorage, setSessionStorage] = useState({});

	const handleSetStorageSession = (session) => {
		handleEncrypt(session);
	};

	const handleGetStorageSession = () => {
		const encryptedData = localStorage.getItem('USER_SESSION');
		handleDecrypt(encryptedData);
	};

	console.log(encrypted);
	return {
		handleSetStorageSession,
		handleGetStorageSession,
		sessionStorage,
		encrypted,
	};
};
