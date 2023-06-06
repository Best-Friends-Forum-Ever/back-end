import Question from "../models/Question.js";
import User from "../models/User.js";

// Create
export const createQuestion = async (req, res) => {
  try {
    const { userId, title, content } = req.body;
    const user = await User.findById(userId);
    const newQuestion = new Question({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      title,
      content
    });
    await newQuestion.save();

    const question = await Question.find();
    res.status(201).json(question);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// Read
export const getAllQuestions = async (req, res) => {
  try {
    const question = await Question.find();
    res.status(200).json(question);
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