import React from "react";
import { useAuth } from "../../context/AuthContext/AuthContext";
import { Box, Typography, Snackbar, Alert, Button } from "@mui/material";
import { useEditData } from "../../hooks/useEditData";
import { PostList } from "../PostList";
import { EditModal } from "./components/EditModal";
import { AdminActions } from "./components/AdminActions";

export const Dashboard: React.FC = () => {
  const { role, logout } = useAuth();
  const {
    isEditModalOpen,
    editTitle,
    editContent,
    openEditModal,
    closeEditModal,
    saveEditContent,
    setEditTitle,
    setEditContent,
    posts,
    notificationOpen,
    handleNotificationClose,
  } = useEditData();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f4f8",
        padding: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          pr: 4,
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={logout}
          sx={{ mt: 2 }}
        >
          Logout
        </Button>
      </Box>
      <Typography variant="h3" gutterBottom sx={{ color: "#1976d2" }}>
        Dashboard
      </Typography>

      {role === "admin" && <AdminActions openEditModal={openEditModal} />}

      <Box
        sx={{
          width: "100%",
          maxWidth: 800,
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <PostList
          posts={posts}
          role={role ?? "user"}
          openEditModal={openEditModal}
        />
      </Box>

      <EditModal
        open={isEditModalOpen}
        title={editTitle}
        content={editContent}
        onClose={closeEditModal}
        onSave={saveEditContent}
        setTitle={setEditTitle}
        setContent={setEditContent}
      />

      <Snackbar
        open={notificationOpen}
        autoHideDuration={3000}
        onClose={handleNotificationClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleNotificationClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          ¡Post creado con éxito!
        </Alert>
      </Snackbar>
    </Box>
  );
};
