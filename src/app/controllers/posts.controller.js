import {
  dbAllPost,
  dbCreatePost,
  dbDeletePost,
  dbGetPostsByUser,
  dbPatchPost,
  dbPostById,
} from "../services/posts.services.js";
import { dbAddPostToUser } from "../services/users.service.js";

const createPost = async (req, res) => {
  try {
    const input = req.body;

    if (req.file) {
      input.postImg = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    }

    const createdPost = await dbCreatePost(input);

    if (input.userName) {
      await dbAddPostToUser(input.userName, createPost._id);
    }

    res.status(201).json({
      message: "Post created successfully",
      event: createdPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating post",
      error: error,
    });
  }
};

const getAllPost = async (req, res) => {
  try {
    const allPosts = await dbAllPost();

    res.status(201).json({
      message: `All post deployed`,
      allPosts,
    });
  } catch (error) {}
};

const getPostById = async (req, res) => {
  try {
    const data = req.params.id;
    const PostById = await dbPostById(data);

    res.status(201).json({
      message: `Post deployed`,
      PostById,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting Post by ID, please try again",
      error: error,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const data = req.params.id;

    const deletedPost = await dbDeletePost(data);

    res.status(200).json({
      message: "Post deleted successfully",
      deletedPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting Post, please try again",
      error: error,
    });
  }
};

const patchPost = async (req, res) => {
  try {
    const data = req.params.id;
    const input = req.body;

    const postUpdated = await dbPatchPost(data, input);

    res.status(200).json({
      message: "Post updated successfully",
      postUpdated,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating Post, please try again",
      error: error,
    });
  }
};

const getPostsByUser = async (req, res) => {
    try {
        const { userId } = req.params

        const posts = await dbGetPostsByUser(userId)

        res.status(200).json({ 
            message: "Posts fetched successfully", 
            posts 
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error })
    }
}

export { patchPost, createPost, getAllPost, deletePost, getPostById, getPostsByUser };
