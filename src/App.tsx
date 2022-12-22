import {  
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import { Feed } from "./pages/feed";
import { Direct } from './pages/direct';
import { Explore } from './pages/explore';
import { Profile } from './pages/profile';
import { ErrorPage } from "./components/errorPage";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Feed />,
      errorElement: <ErrorPage />
    },
    {
      path: "/direct",
      element: <Direct />,
      errorElement: <ErrorPage />
    },
    {
      path: "/explore",
      element: <Explore />,
      errorElement: <ErrorPage />
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <ErrorPage />
    },
  ]);

  return (
    <RouterProvider
      router={router}
    />
  );
}
