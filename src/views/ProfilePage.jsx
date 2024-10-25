import { useEncrypt } from '../hooks/useEncrypt';
import { useStorage } from '../hooks/useStorage';

export const ProfilePage = () => {
	const { encrypted } = useStorage();
	console.log(encrypted);
	return <div>ProfilePage</div>;
};
