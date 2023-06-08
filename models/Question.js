import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    content: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", QuestionSchema);

export default Question;