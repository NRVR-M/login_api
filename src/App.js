
import './styles/css/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Eingeloggt from './pages/Eingeloggt';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {

    const router = createBrowserRouter([
        {path: "/", element: <Home />},
        {path: "/login", element: <Login />},
        {path: "/eingeloggt", element: <Eingeloggt />},

    ]);

    return (

        <>
            <RouterProvider router={router} />
        </>

    );
}



export default App;
