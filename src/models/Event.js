import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    eventDate: {
      type: Date,
      required: [true, "Please provide an event date"],
    },
    location: {
      type: String,
      required: [true, "Please provide a location"],
    },
    department: {
      type: String,
      required: [true, "Please provide a department"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a creator"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema); 