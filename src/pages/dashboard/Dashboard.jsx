import { useRole } from "../../hooks/useUserFuntionalty";
import DashboardAdmin from "./DashboardAdmin";
import DashboardUser from "./DashboardUser";

const Dashboard = () => {
  const {role} = useRole()
  if(role === "admin") return <DashboardAdmin />
  return <DashboardUser />;
};

export default Dashboard;
