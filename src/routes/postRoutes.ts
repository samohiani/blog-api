import { Router } from "express";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postController";

const router = Router();

router.post("/create", createPost);
router.get("/all", getPosts);
router.put("/single", getPostById);
router.put("/update", updatePost);
router.delete("/:id", deletePost);

export default router;
