import { AuthProvider } from './context/AuthProvider';
import { CartProvider } from './context/CartProvider';
import { ProductProvider } from './context/ProductProvider';
import { RouterManager } from './router/RouterManager';

function App() {
	return (
		<>
			<AuthProvider>
				<CartProvider>
					<ProductProvider>
						<RouterManager />
					</ProductProvider>
				</CartProvider>
			</AuthProvider>
		</>
	);
}

export default App;
