import express from "express";
import { getUserAnswer } from "../controller/answer.js";
import { getUserQuestions } from "../controller/question.js"
import { verifyToken } from "../middleware/verify.js";

const router = express.Router();

/* READ */
router.get("/:id/questions", verifyToken, getUserQuestions);
router.get("/:id/answers", verifyToken, getUserAnswer);

export default router;