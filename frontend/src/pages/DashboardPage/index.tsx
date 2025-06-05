import Dashboard from "../../components/Dashboard";
import { getDashboardConfig } from "./dashboardConfigs";

export default function DashboardPage({ tipo }: { tipo: string }) {

  const config = getDashboardConfig(tipo); // função que retorna os dados com base no tipo

  return <Dashboard {...config} />;
}
