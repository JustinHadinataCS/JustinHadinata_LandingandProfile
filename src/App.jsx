import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./LandingPage";
import ProfilePage from "./ProfilePage";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> }, // Default index route
      { path: "home", element: <LandingPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
