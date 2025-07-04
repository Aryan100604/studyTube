import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  videoId: { type: String, required: true, unique: true },
  title: String,
  description: String,
  thumbnail: String,
  channelTitle: String,
  publishedAt: Date,
  tags: [String],
});

const Video = mongoose.model("Video", VideoSchema);
export default Video;
