import express from "express";
import { saveCode, getCode } from "../controllers/compilerfn";

export const router = express.Router();

router.post("/save", saveCode);
router.post("/load", getCode);
