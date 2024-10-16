import React from "react";
import { Box, Typography, TextField, Button, Modal } from "@mui/material";

interface EditModalProps {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
  onSave: () => void;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  open,
  title,
  content,
  onClose,
  onSave,
  setTitle,
  setContent,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Editar Datos
        </Typography>
        <TextField
          label="Título"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Contenido"
          variant="outlined"
          fullWidth
          multiline
          minRows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Box
          sx={{ mt: 2, display: "flex", justifyContent: "flex-end", gap: 2 }}
        >
          <Button variant="contained" color="primary" onClick={onSave}>
            Guardar
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
