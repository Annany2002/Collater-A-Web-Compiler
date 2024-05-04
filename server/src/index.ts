import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connect } from "./lib/dbConnect";
import { router } from "./routes/compiler";
import path from "path";

config();

const app = express();
const PORT = 5001;

connect(process.env.MONGO_URL as string);

app.use(express.json());
app.use(cors());
app.use("/api/compile", router);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
