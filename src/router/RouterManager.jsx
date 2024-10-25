import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../views/HomePage';
import { AdminLayout } from '../layouts/AdminLayout';
import { useAuth } from '../hooks/useAuth';
import { AuthGuard } from '../guard/AuthGuard';
import { DashboardPage } from '../views/DashboardPage';
import { ProfilePage } from '../views/ProfilePage';
import { LoginPage } from '../views/LoginPage';
import { RegisterPage } from '../views/RegisterPage';

export const RouterManager = () => {
	const { userSession } = useAuth();

	return (
		<Router>
			<Routes>
				{/* Users Routes */}
				<Route
					path="/login"
					element={<LoginPage />}
				/>

				<Route
					path="/register"
					element={<RegisterPage />}
				/>

				<Route
					path="/"
					element={<MainLayout />}
				>
					<Route
						index
						element={<HomePage />}
					/>

					<Route
						path="/profile/:user_id"
						element={
							<AuthGuard
								redirectTo="/login"
								isAllow={userSession.token}
							/>
						}
					>
						<Route
							index
							element={<ProfilePage />}
						/>
					</Route>
				</Route>

				{/* Admin Routes */}
				<Route
					path="/admin"
					element={
						<AuthGuard isAllow={userSession.roles.includes('admin')}>
							<AdminLayout />
						</AuthGuard>
					}
				>
					<Route
						index
						element={<DashboardPage />}
					/>
				</Route>
			</Routes>
		</Router>
	);
};
