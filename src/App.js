
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import BlogDetail from './components/BlogDetail/BlogDetail';

import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([


    {
      path: '/', element: <Main />,
      children: [
        { path: '/home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'products', element: <Products /> },
        {
          path: '/blogs',
          loader:  () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Blog />
        },
        {
          path:'/blogs/:userId',
          element:<BlogDetail/>,
          loader : ({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          }
        }

      ]
    },


   
    { path: '*', element: <div>No 400044</div> },
  ]);
  return (
    <div className="App">


      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
