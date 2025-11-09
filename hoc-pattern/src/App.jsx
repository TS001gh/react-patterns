import "./App.css";
import withPermissionsFetching from "./hoc/withPermissionsFetching";
import Admin from "./Pages/Admin";
import Profile from "./Pages/Profile";
import Reports from "./Pages/Reports";

function App() {
  const ProfileWithUser = withPermissionsFetching(Profile);
  const AdminPanelWithUser = withPermissionsFetching(Admin, "admin");
  const ReportsWithUser = withPermissionsFetching(Reports, "reports");
  return (
    <>
      <div style={{ padding: 20 }}>
        <h1>Admin Dashboard</h1>

        <hr />
        <ProfileWithUser />

        <hr />
        <AdminPanelWithUser />

        <hr />
        <ReportsWithUser />
      </div>
    </>
  );
}

export default App;
