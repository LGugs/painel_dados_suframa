import React, { useState } from "react";
import { Typography, ToggleButtonGroup } from "@mui/material";
import { Stack } from "@mui/material";
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

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newPolo: number | ""
  ) => {
    const poloSelecionado = polos.find((p) => p.id === newPolo);
    const descricao = poloSelecionado?.descricao || "TODOS OS POLOS";

    dispatch(setDashPolo({ title: descricao.toUpperCase() }));
    setSelectedPolo(newPolo);
  };

  return (
    <Stack spacing={2} width="100%">
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
            <CustomToggleButton key={polo.id} value={polo.id}>
              <Typography fontWeight="bold">
                {polo.descricao.toUpperCase()}
              </Typography>
            </CustomToggleButton>
          ))}
        </ToggleButtonGroup>
      ))}
    </Stack>
  );
};

export default PolosToggleGroup;
