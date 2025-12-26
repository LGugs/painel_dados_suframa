import { CustomToggleButton } from "../../components/ToogleButtons/CustomToggleButton";
import DashboardPage from "../../pages/DashboardPage";
import { Box, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import type { TipoDado }  from "../../interfaces/Dados";

interface DashboardSlotProps {
  tipo: TipoDado;
  poloId: string;
  onClick: () => void;
  iconFirst?: boolean;
  label: string;
}

export default function DashboardSlot({
  tipo,
  poloId,
  onClick,
  iconFirst = false,
  label,
}: DashboardSlotProps) {
  if (!tipo) return null;

  return (
    <Box sx={{ flex: 1, minWidth: { xs: "100%", md: 400 } }}>
      <DashboardPage tipo={tipo} polo={poloId} />

      <CustomToggleButton
        onClick={onClick}
        sx={{ maxWidth: "100%", overflow: "hidden" }}
        value={label}
      >
        {iconFirst && <ArrowUpwardIcon />}

        <Typography
          fontWeight="bold"
          noWrap
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </Typography>

        {!iconFirst && <ArrowUpwardIcon />}
      </CustomToggleButton>
    </Box>
  );
}
