import Home from '~/components/pages/Home'
import Following from '~/components/pages/Following'
import Profile from '~/components/pages/Profile';


// Public Routes
export const publicRoutes = [
  {
    path:'/',
    component: Home
  },
  {
    path:'/following',
    component: Following
  },
  {
    path:'/profile',
    component: Profile
  }
];

export const privateRoutes = [

];