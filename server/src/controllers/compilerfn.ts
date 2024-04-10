import { Request, Response } from "express";
import { Code } from "../models/Code";

export const saveCode = async (req: Request, res: Response) => {
  const { codeLanguages } = req.body;
  try {
    const codeLang = await Code.create({ codeLanguages });
    return res.status(201).send({ codeLang, url: codeLang._id });
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

export const getCode = async (req: Request, res: Response) => {
  const { codeId } = req.body;
  try {
    const codeLang = await Code.findById(codeId);

    if (!codeLang) return res.status(404).send("Code not found");

    return res.status(200).send({ languages: codeLang.codeLanguages });
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};
