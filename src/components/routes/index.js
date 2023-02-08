import Home from '~/components/pages/Home'
import Following from '~/components/pages/Following'
import Profile from '~/components/pages/Profile';
import Upload from '~/components/pages/Upload';
import { HeaderOnlyLayout } from '../Layouts';
import Search from '~/components/pages/Search';

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
  },
  {
    path:'/upload',
    component: Upload,
    layout: HeaderOnlyLayout,
  },
  {
    path:'/search',
    component: Search,
    layout: null,
  }
];

export const privateRoutes = [

];