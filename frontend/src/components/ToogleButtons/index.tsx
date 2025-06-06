import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Stack } from "@mui/material";

const PolosToggleGroup = () => {
  const [selectedPolo, setSelectedPolo] = useState<string | null>(null);

  const polos = Array.from({ length: 24 }, (_, i) => `Polo ${i + 1}`);
  const grupos = Array.from({ length: Math.ceil(polos.length / 6) }, (_, i) =>
    polos.slice(i * 6, i * 6 + 6)
  );

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newPolo: string | null
  ) => {
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
            gap: 1,
            flexWrap: "nowrap",
            boxSizing: "border-box",
            px: 0,
            ml: 0,
          }}
        >
          {grupo.map((polo) => (
            <ToggleButton
              key={polo}
              value={polo}
              sx={{
                flex: 1,
                whiteSpace: "nowrap",
              }}
            >
              {polo}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      ))}
    </Stack>
  );
};

export default PolosToggleGroup;
