import { styled, alpha } from "@mui/material/styles";
import { ToggleButton } from "@mui/material";

export const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  flex: 1,
  whiteSpace: "nowrap",
  border: `1px solid ${theme.palette.divider}`,
  borderLeft: "none",
  borderRadius: 0,
  transition: "none !important", // impede animações que causam o flash

  "&:first-of-type": {
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  "&:last-of-type": {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  "&:hover": {
    border: "none",
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
    color: theme.palette.primary.main,
  },
}));
