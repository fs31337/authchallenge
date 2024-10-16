import { useState, useEffect } from "react";
import { getPosts } from "../services/Api";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const useEditData = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response.data);
    });
  }, []);

  const openEditModal = (
    title: string = "",
    content: string = "",
    id: number | null = null
  ) => {
    setEditTitle(title);
    setEditContent(content);
    setEditingPostId(id);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditTitle("");
    setEditContent("");
    setEditingPostId(null);
  };

  const saveEditContent = () => {
    if (editingPostId) {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === editingPostId
            ? { ...post, title: editTitle, body: editContent }
            : post
        )
      );
    } else {
      const newPost = {
        id: Date.now(),
        title: editTitle,
        body: editContent,
      };
      setPosts((prevPosts) => [newPost, ...prevPosts]);

      setNotificationOpen(true);
    }

    closeEditModal();
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  return {
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
  };
};
