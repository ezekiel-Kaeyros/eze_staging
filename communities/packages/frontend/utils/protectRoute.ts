import axios from 'axios';
import { UserRole } from '../constants';

const HOME_URL = 'https://communities.eze.wiki';
// export const redirectToHome = () => {
//   return {
//     redirect: {
//       permanent: false,
//       destination: HOME_URL,
//     },
//     props: {},
//   };
// };

export const isAuthorized = async (req, requiredRole = UserRole.Regular): Promise<boolean> => {
  try {
    const { data: user } = await axios.get('/auth-user', {
      headers: {
        Authorization: `bearer ${req.cookies.token}`,
      },
    });

    console.log('user', user);

    if (!user) {
      return false;
    }

    // Super Admin
    if (requiredRole === UserRole.SuperAdmin && user.role !== UserRole.SuperAdmin) {
      return false;
    }

    // Admin
    if (requiredRole === UserRole.Admin) {
      const isSuperAdmin = user.role === UserRole.SuperAdmin;
      const isAdmin = user.role === UserRole.Admin;
      if (!isSuperAdmin && !isAdmin) {
        return false;
      }
    }

    return true;
  } catch (error) {
    return false;
  }
};
