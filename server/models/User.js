import mongoose from "mongoose";

const BookmarkSchema = new mongoose.Schema({
  time: Number,
  note: String,
  createdAt: { type: Date, default: Date.now },
});

const UserVideoSchema = new mongoose.Schema({
  videoId: String,
  title: String,
  thumbnail: String,
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  lastWatched: Number,
  bookmarks: [BookmarkSchema],
  updatedAt: { type: Date, default: Date.now },
});

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  passwordHash: String,
  videos: [UserVideoSchema],
});

const User = mongoose.model("User", UserSchema);
export default User;
