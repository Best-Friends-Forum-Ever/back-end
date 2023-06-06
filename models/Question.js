import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    answers: {
      type: Array,
      required: true,
      default: []
    }
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", QuestionSchema);

export default Question;