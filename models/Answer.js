import mongoose from "mongoose";

const AnswerSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    questionId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    upvote: {
      type: Number,
      default: 0
    },
    questions: {
      type: Array,
      required: true,
      default: [],
    }
  },
  { timestamps: true }
);

const Answer = mongoose.model("Answer", AnswerSchema);

export default Answer;