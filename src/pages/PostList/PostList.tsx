import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Pagination,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { usePostList } from "../../hooks/usePostList";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
  role: string;
  openEditModal: (title: string, content: string, id: number) => void;
}

export const PostList: React.FC<PostListProps> = ({
  posts,
  role,
  openEditModal,
}) => {
  const {
    paginatedPosts,
    currentPage,
    totalPages,
    searchTerm,
    handlePageChange,
    handleSearchChange,
  } = usePostList(posts);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        padding: 2,
      }}
    >
      <TextField
        label="Buscar posts"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mb: 3, maxWidth: 600 }}
      />
      {paginatedPosts.map((post) => (
        <Card
          key={post.id}
          sx={{
            width: "100%",
            maxWidth: 600,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            position: "relative",
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
              {post.title}
            </Typography>
            <Typography variant="body1">{post.body}</Typography>
            {role === "admin" && (
              <IconButton
                sx={{ position: "absolute", top: 8, right: 8 }}
                onClick={() => openEditModal(post.title, post.body, post.id)}
              >
                <EditIcon />
              </IconButton>
            )}
          </CardContent>
        </Card>
      ))}
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{ mt: 3 }}
        />
      )}
    </Box>
  );
};
