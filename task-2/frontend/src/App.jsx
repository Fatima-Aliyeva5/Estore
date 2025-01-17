
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Category from './pages/Category'
import Latest from './pages/Latest'
import Blog from './pages/Blog'
import Pages from './pages/Pages'
import Contact from './pages/Contact'
import Wishlist from './pages/wishlist/Wishlist'
import Basket from './pages/basket/Basket'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import Admin from './pages/admin/Admin'


function App() {
const router = createBrowserRouter([
{
  path: "/",
  element: <Layout/>,
  children:[
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "category",
      element: <Category/>
    },
    {
      path: "/latest",
      element: <Latest/>
    },
    {
      path: '/blog',
      element: <Blog/>
    },
    {
      path: "/pages",
      element: <Pages/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/wishlist",
      element: <Wishlist/>
    },
    {
      path: "/basket",
      element: <Basket/>
    },
    {
      path: "/admin",
      element: <Admin/>
    }
  ]   
  
}
])

  return (
    <Provider store={store}>
      <RouterProvider router={router}>
   
   </RouterProvider>
    </Provider>
  )
}

export default App
