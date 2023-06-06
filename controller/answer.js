import Answer from "../models/Answer.js";
import User from "../models/User.js";

// Create
export const createAnswer = async (req, res) => {
  try {
    const { userId, content, questionId } = req.body;
    const user = await User.findById(userId);
    const newAnswer = new Answer({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      questionId,
      content,
    });
    await newAnswer.save();

    const answer = await Answer.find();
    res.status(201).json(answer);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// Read
export const getAnswerbyQuestionId = async (req, res) => {
  try {
    const { questionId } = req.params;
    const answers = await Answer.find({ questionId});
    res.status(200).json(answers);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserQuestions = async (req, res) => {
  try {
    const { userId } = req.params;
    const question = await Question.find({ userId });
    res.status(200).json(question);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};