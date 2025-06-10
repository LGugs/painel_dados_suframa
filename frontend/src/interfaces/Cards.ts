import type { SxProps, Theme } from "@mui/material/styles";

export interface CardProps {
  titulo: string;
  valor: number;
  sx?: SxProps<Theme>;
  tipo?: string;
  polo?: string;
}
