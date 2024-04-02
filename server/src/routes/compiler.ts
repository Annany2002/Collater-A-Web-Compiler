import express from "express";
import { saveCode } from "../controllers/compilerfn";

export const router = express.Router();

router.post("/save", saveCode);
