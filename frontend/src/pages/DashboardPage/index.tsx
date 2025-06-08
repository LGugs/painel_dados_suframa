import { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard";
import { getDashboardData } from "./dashboardData";
import type { DashboardTypes } from "../../interfaces/Dashboard";

export default function DashboardPage({ tipo }: { tipo: string }) {
  const [data, setData] = useState<DashboardTypes | null>(null);

  // getDashboardData sempre será executado quando o tipo mudar.
  // O resultado dessa execução é inserido no estado (state) no qual define os dados a serem exibidos
  useEffect(() => {
    getDashboardData(tipo).then(setData);
  }, [tipo]);

  if (!data) return <div>Carregando...</div>;

  return <Dashboard {...data} />;
}
