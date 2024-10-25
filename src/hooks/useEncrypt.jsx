import CryptoJs from 'crypto-js';
import { useState } from 'react';

const { VITE_CRYPTOJS_SECRET } = import.meta.env;

export const useEncrypt = () => {
	const [encrypted, setEncrypted] = useState(null);
	const [decrypted, setDecrypted] = useState(null);

	const handleEncrypt = (data) => {
		const encrypted = CryptoJs.AES.encrypt(
			data,
			String(VITE_CRYPTOJS_SECRET)
		).toString();

		setEncrypted(encrypted);
	};

	const handleDecrypt = () => {
		const decrypted = CryptoJs.AES.decrypt(
			encrypted,
			String(VITE_CRYPTOJS_SECRET)
		).toString(CryptoJs.enc.Utf8);

		setDecrypted(decrypted);
	};

	return {
		encrypted,
		decrypted,
		handleEncrypt,
		handleDecrypt,
	};
};
