import Dashboard from "../../components/Dashboard";
import { useParams } from "react-router-dom";
import { getDashboardConfig } from "./dashboardConfigs";

export function DashboardPage() {
  const { tipo } = useParams();

  const config = getDashboardConfig(tipo); // função que retorna os dados com base no tipo

  return <Dashboard {...config} />;
}
