import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { connect } from "./lib/dbConnect";
import { router } from "./routes/compiler";

config();

const app = express();
const PORT = 5001;

connect(process.env.MONGO_URL);

app.use(express.json());
app.use(cors());
app.use("/api/compile", router);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("ok");
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
