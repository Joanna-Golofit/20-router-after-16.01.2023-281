import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailPage, { loader as detailLoader } from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/RootLayout";
import EventsRootLayout from "./pages/EventsRootLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':id',
            element: <EventDetailPage />,
            loader: detailLoader
          },
          { path: ':id/edit', element: <EditEventPage /> },
          { path: 'new', element: <NewEventPage /> },
          // { path: '/products/:productId', element: <ProductDetail /> },
        ]
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
