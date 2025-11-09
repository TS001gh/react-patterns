import { useEffect, useState } from "react";
import mockUserResponse from "../data/permissions";

const withPermissionsFetching = (WrappedComponent, requiredPermission) => {
  return function WithPermissionsFetching(props) {
    const [hasPermission, setHasPermission] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    
    useEffect(() => {
       const timer = setTimeout(() => {
        const { user, rolePermissions } = mockUserResponse;
        const userPermissions = rolePermissions[user.role] || [];

        const allowed = requiredPermission
          ? userPermissions.includes(requiredPermission)
          : true;

        setUser(user);
        setHasPermission(allowed);
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!hasPermission) return <div>You are not allowed to view this page</div>;

    return <WrappedComponent {...props} user={user} hasPermission={hasPermission} />;
  };
};

export default withPermissionsFetching;
