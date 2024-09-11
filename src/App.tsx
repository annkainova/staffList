import { ChakraProvider } from '@chakra-ui/react';
import MainPage from './pages/MainPage/MainPage';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import FormComponent from './components/Form/Form';
import EditComponent from './pages/MainPage/components/EditComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    // children: [],
  },
  {
    path: 'employees-edit/:employeesId',
    element: <EditComponent header="Редактировать" isSelectedEmployee={true} />,
  },
  {
    path: 'employees-add',
    element: <EditComponent header="Создать" isSelectedEmployee={false} />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
