import Link from "@mui/material/Link";
import Typography, { type TypographyProps } from "@mui/material/Typography";

export default function Copyright(props: TypographyProps) {
  return (
    <Typography
      variant="body2"
      align="center"
      {...props}
      sx={[
        {
          color: "text.secondary",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      {"© "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" href="https://www.gov.br/suframa/pt-br">
        SUFRAMA - Superintendência da Zona Franca de Manaus
      </Link>
    </Typography>
  );
}
