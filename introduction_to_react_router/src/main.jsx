import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css';
import About from './components/about/about.jsx';
import Contact from './components/contact/contact.jsx';
import Home from './components/home/home.jsx';
import Users from './components/users/users.jsx';
import Userdetails from './components/userDetails/Userdetails.jsx';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Posts from './components/Posts/posts.jsx';
import PostDetails from './components/postDetails/PostDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('users.json'),
        element: <Users></Users>
      },
      {
        path: '/users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Userdetails></Userdetails>
      },
      {
        path: '/posts',
        loader: () => fetch('posts.json'),
        element: <Posts></Posts>
      },
      {
        path: '/posts/:postId',
        loader: ({params}) => fetch(`posts.json/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
      
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)




