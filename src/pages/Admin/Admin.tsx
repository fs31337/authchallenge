import React from "react";
import { Button, Box, Typography } from "@mui/material";

export const Admin: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 4,
        ml: 4,
        padding: 3,
        backgroundColor: "#e8f5e9",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" sx={{ color: "#388e3c", mb: 2 }}>
        Admin Dashboard
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 2, backgroundColor: "#388e3c", mr: 2 }}
      >
        Create New Data
      </Button>
      <Button variant="contained" sx={{ mt: 2, backgroundColor: "#388e3c" }}>
        Edit Existing Data
      </Button>
    </Box>
  );
};
