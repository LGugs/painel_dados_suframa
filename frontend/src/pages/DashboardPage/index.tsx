import { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard";
import { getDashboardData } from "./dashboardData";
import type { DashboardTypes } from "../../interfaces/Dashboard";
import { CircularProgress, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function DashboardPage({tipo, polo}:DashboardTypes) {
  const [data, setData] = useState<DashboardTypes | null>(null);
  const [loading, setLoading] = useState(false);

  // getDashboardData sempre será executado quando o tipo mudar.
  // O resultado dessa execução é inserido no estado (state) no qual define os dados a serem exibidos
  useEffect(() => {
    setLoading(true); // começa carregando

    getDashboardData(tipo, polo!).then(setData).finally(() => setLoading(false));
  }, [tipo, polo]);

  if (loading || !data) return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="408px"
    >
      <CircularProgress />
    </Box>
  );

  return (<motion.div
      key={tipo + polo}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Dashboard {...data} />
    </motion.div>);
}
