import express from "express";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import VideoRoute from "./routes/video.js";
import commentRoute from "./routes/comment.js";

const app = express();

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/video", VideoRoute);
app.use("/api/v1/comment", commentRoute);

export default app;
