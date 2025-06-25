import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CourseContext } from './Contexts/CourseContext/CourseContext.jsx'
import { ShopContext } from './Contexts/ShopContext/ShopContext.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout/MainLayout.jsx'
import Home from './Pages/Home/Home.jsx'
import CoursePage from './Pages/CoursePage/CoursePage';
import CategoryPage from './Pages/Category/CategoryPage';
import Contact from './Pages/Contact/Contact';
import CartPage from './Pages/CartPage/CartPage';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import VideoPage from './Pages/VideoPage/VideoPage';
import AdminDashboard from './Dashboards/AdminDashboard/AdminDashboard.jsx'
import InstructorDashboard from './Dashboards/InstructorDashboard/InstructorDashboard.jsx'
import AddCourse from './Components/AddCourse/AddCourse.jsx'
import AllCoursesOfInstructor from './Components/AllCoursesOfInstructor/AllCoursesOfInstructor.jsx'
import UpdatePage from './Pages/UpdatePage/UpdatePage.jsx'
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage.jsx'
import AuthContext from './Contexts/AuthContex/AuthContext.jsx'
import LoginPage from './Pages/LoginPage/LoginPage.jsx'
import AllUsers from './Components/AllUsers/AllUsers.jsx'
import PrivateDashboard from './PrivateRoutes/PrivateDashboard/PrivateDashboard';
import ProfilePage from './Pages/ProfilePage/ProfilePage.jsx'
import PaymentPage from './Pages/PaymentPage/PaymentPage.jsx'
import AllOrders from './Components/AllOrders/AllOrders.jsx'
import UpdateProfile from './Components/UpdateProfile/UpdateProfile.jsx'
import MyCourses from './Components/MyOrders/MyOrders.jsx'
import MyOrders from './Components/MyOrders/MyOrders.jsx'
import CertificatePage from './Pages/CertificatePage/CertificatePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: ()=> fetch('http://localhost:5000/courses')
      },
      {
        path: '/registration',
        element: <RegistrationPage/>
      },
      {
        path: '/login',
        element: <LoginPage/>
      },
      {
        path: '/courses',
        element: <CoursePage/>,
        loader: () => fetch('http://localhost:5000/courses') 
      },
      {
        path: '/cart',
        element: <CartPage/>
      },
      {
        path: '/category/:categoryName',
        element: <CategoryPage/>
      },
      {
        path: '/single-course/:id',
        element: <SingleProduct/>,
        loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`) 
      },
      {
        path: '/video-lecture/:id',
        element: <VideoPage/>,
        loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
      },
      {
        path: '/video/:videoTitle/:videoId',
        element: <VideoPage/>
      },
      {
        path: '/certificate',
        element: <CertificatePage/>
      },
      {
        path: '/profile',
        element: <ProfilePage/>,
        children: [
          {
            path: 'update-profile',
            element: <UpdateProfile/>,
          },
          {
            path: 'my-courses',
            element: <MyOrders/>,
            loader: ({params}) => fetch(`http://localhost:5000/orders`)
          }
        ]
      },
      {
        path: '/payment',
        element: <PaymentPage/>
      },
      {
        path: '/update-course/:id',
        element: <UpdatePage/>,
        loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
      },
      {
        path: '/admin-dashboard',
        element: <PrivateDashboard>
          <AdminDashboard/>
        </PrivateDashboard>,
        children: [
          {
            path: '/admin-dashboard/add-course',
            element: <PrivateDashboard>
              <AddCourse/>
            </PrivateDashboard>
          },
          {
            path: '/admin-dashboard/all-course',
            element: <PrivateDashboard>
              <AllCoursesOfInstructor/>
            </PrivateDashboard>,
            loader: () => fetch('http://localhost:5000/courses')
          },
          {
            path: '/admin-dashboard/all-orders',
            element: <PrivateDashboard>
              <AllOrders/>
            </PrivateDashboard>,
            loader: () => fetch('http://localhost:5000/orders')
          },
          {
            path: '/admin-dashboard/all-users',
            element: <AllUsers/>,
            loader: () => fetch('http://localhost:5000/users')
          }
        ]
      },
      {
        path: '/instructor-dashboard',
        element: <PrivateDashboard>
          <InstructorDashboard/>
        </PrivateDashboard>,
        children: [
          {
            path: '/instructor-dashboard/add-course',
            element: <PrivateDashboard>
              <AddCourse/>
            </PrivateDashboard>
          },
          {
            path: '/instructor-dashboard/all-course',
            element: <PrivateDashboard>
               <AllCoursesOfInstructor/>
            </PrivateDashboard>,
            loader: () => fetch('http://localhost:5000/courses')
          },
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContext>
    <CourseContext>
    <ShopContext>
      <RouterProvider router = {router}></RouterProvider>
    </ShopContext>
  </CourseContext>
  </AuthContext>,
)
