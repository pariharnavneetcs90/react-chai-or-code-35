import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

//5th step

//1st way
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//           path:"", // matlab / ke baad kuch nahi ye display ho ga
//           element: <Home/>
//       },
//       {
//         path:"about", // / ke baad about /about
//         element: <About/>
//       },
//       {
//         path:"contact", // / ke baad about /about
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])

//2nd better way 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>   {/* sirf header or footer aye ga isme */}
     <Route path='' element= {<Home/>}/>
     <Route path='about' element= {<About/>}/>
     <Route path='contact' element= {<ContactUs/>}/>

     <Route path='user/:ids' element= {<User/>}/>
     <Route path='github' element= {<Github/>}/>
     


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
