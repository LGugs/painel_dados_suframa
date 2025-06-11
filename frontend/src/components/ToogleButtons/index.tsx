import React, { useState } from "react";
import { Typography, ToggleButtonGroup, Stack, Tooltip } from "@mui/material";
import { polos } from "../../interfaces/Polos";
import { CustomToggleButton } from "./CustomToggleButton";
import { setDashPolo } from "../../redux/slices/dashboard.slice";
import { useDispatch } from "react-redux";

const PolosToggleGroup = () => {
  const [selectedPolo, setSelectedPolo] = useState<number | "">(""); // TODOS OS POLOS SELECIONADO POR PADRÃO

  const dispatch = useDispatch();

  const grupos = Array.from({ length: Math.ceil(polos.length / 6) }, (_, i) =>
    polos.slice(i * 6, i * 6 + 6)
  );

  // no lugar do event, foi colocado _ para que não tenha warning ao buildar
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newPolo: number | ""
  ) => {
    const poloSelecionado = polos.find((p) => p.id === newPolo);
    const descricao = poloSelecionado?.descricao || "TODOS OS POLOS";
    const id = poloSelecionado?.id || "";

    dispatch(setDashPolo({ descricao: descricao.toUpperCase(), id: id }));
    setSelectedPolo(newPolo);
  };

  return (
    <Stack spacing={2} width="100%" alignItems="center">
      {grupos.map((grupo, idx) => (
        <ToggleButtonGroup
          key={idx}
          value={selectedPolo}
          exclusive
          onChange={handleChange}
          fullWidth
          sx={{
        display: "flex",
        width: "100%",
        gap: 0,
        "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
          borderLeft: "none !important",
        },
        px: 0,
        ml: 0,
      }}
        >
          {grupo.map((polo) => (
            <Tooltip title={polo.descricao.toUpperCase()}>
              <CustomToggleButton key={polo.id} value={polo.id} sx={{ maxWidth: "100%", overflow: "hidden" }}>
                <Typography fontWeight="bold" noWrap sx={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
                  {polo.descricao.toUpperCase()}
                </Typography>
              </CustomToggleButton>
            </Tooltip>
          ))}
        </ToggleButtonGroup>
      ))}
    </Stack>
  );
};

export default PolosToggleGroup;
