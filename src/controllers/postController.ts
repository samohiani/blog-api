import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../config";
import { Post } from "../entity/post";

const postRepository = AppDataSource.getRepository(Post);

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      res.status(400).json({
        status: "error",
        message: "All fields are required",
        data: [],
      });
    }
    const post = postRepository.create({ title, content });
    const savedPost = await postRepository.save(post);
    res.status(201).json({
      status: "success",
      message: "Post created successfully",
      data: savedPost,
    });
  } catch (error) {
    next(error);
  }
};

export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await postRepository.find();
    res.status(200).json({
      status: "success",
      message: "Posts Retrieved",
      data: posts,
    });
  } catch (error) {
    next(error);
  }
};

export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.body;
    const post = await postRepository.findOneBy({ id });
    if (!post) {
      res.status(404).json({
        status: "error",
        message: "post not found",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: "Post retrieved successfully",
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id, title, content } = req.body;
    let post = await postRepository.findOneBy({ id });

    if (!post) {
      res.status(404).json({
        status: "error",
        message: "post not found",
      });
      return;
    }

    post.title = title || post.title;
    post.content = content || post.content;

    const updatedPost = await postRepository.save(post);
    res.status(200).json({
      status: "success",
      message: "Post updated successfully",
      data: updatedPost,
    });
  } catch (error) {
    next(error);
  }
};

// deletePost with explicit return type Promise<void>
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const result = await postRepository.delete(id);
    if (result.affected === 0) {
      res.status(404).json({
        status: "error",
        message: "post not found",
      });
      return;
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
