import express from "express";
import { createQuestion, getAllQuestions } from "../controller/question.js";
import { createAnswer, getAnswerbyQuestionId } from "../controller/answer.js";
import { verifyToken } from "../middleware/verify.js";

const router = express.Router();

// READ
router.get("/questions", getAllQuestions);
router.get("/:questionId/answers", getAnswerbyQuestionId);

// POST
router.post("/question", verifyToken, createQuestion);
router.post("/answer", verifyToken, createAnswer)

export default router;