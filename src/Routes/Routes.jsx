import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AllToys from '../pages/AllToys/AllToys';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MyToys from '../pages/MyToys/MyToys';
import AddToys from '../pages/AddToys/AddToys';
import ToysDetails from '../pages/ToysDetails/ToysDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'all-toys',
        element: (
          <PrivateRoute>
            <AllToys></AllToys>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-toys',
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: 'add-toys',
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: 'all-toys/:id',
        element: <ToysDetails></ToysDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
