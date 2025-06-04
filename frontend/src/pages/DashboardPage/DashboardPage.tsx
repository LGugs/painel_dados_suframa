import { Dashboard } from "./Dashboard";
import { useParams } from "react-router-dom";

export function DashboardPage() {
  const { tipo } = useParams();

  const config = getDashboardConfig(tipo); // função que retorna os dados com base no tipo

  return <Dashboard {...config} />;
}