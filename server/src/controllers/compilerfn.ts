import { Request, Response } from "express";
import { Code } from "../models/Code";

export const saveCode = async (req: Request, res: Response) => {
  const { codeLanguages } = req.body;
  try {
    const codeLang = await Code.create({ codeLanguages });
    return res.status(201).json(codeLang);
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};
