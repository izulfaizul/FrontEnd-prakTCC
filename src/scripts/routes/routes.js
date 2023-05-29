import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Register from '../views/pages/register';
import Add from '../views/pages/add';

const unAuthedRoutes = {
  '/': Login,
  '/regis': Register,
  '/login': Login,
};

const authedRoutes = {
  '/': Home,
  '/home': Home,
  '/add': Add,
};

export { authedRoutes, unAuthedRoutes };
