import Dashboard from "../../components/Dashboard";
import { getDashboardConfig } from "./dashboardConfigsData";

export default function DashboardPage({ tipo }: { tipo: string }) {
  const config = getDashboardConfig(tipo);

  return <Dashboard {...config} />;
}
