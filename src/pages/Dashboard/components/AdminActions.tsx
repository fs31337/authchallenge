import React from "react";
import { Button, Box } from "@mui/material";

interface AdminActionsProps {
  openEditModal: (title?: string, content?: string) => void;
}

export const AdminActions: React.FC<AdminActionsProps> = ({
  openEditModal,
}) => {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#1976d2",
          "&:hover": {
            backgroundColor: "#115293",
          },
        }}
        onClick={() => openEditModal("Nuevo Post")}
      >
        Crear nuevo post
      </Button>
    </Box>
  );
};
