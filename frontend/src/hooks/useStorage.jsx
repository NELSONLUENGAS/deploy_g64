import { useEffect, useState } from 'react';
import { useEncrypt } from './useEncrypt';

export const useStorage = () => {
	const { encrypted, decrypted, handleEncrypt, handleDecrypt } = useEncrypt();

	const handleSetStorageSession = (session) => {
		handleEncrypt(session);
	};

	const handleGetStorageSession = () => {
		const encryptedData = localStorage.getItem('USER_SESSION');
		if (encryptedData) {
			handleDecrypt(encryptedData);
		}
	};

	useEffect(() => {
		if (encrypted) {
			localStorage.setItem('USER_SESSION', encrypted);
		}
	}, [encrypted]);

	return {
		handleSetStorageSession,
		handleGetStorageSession,
		decrypted,
	};
};
