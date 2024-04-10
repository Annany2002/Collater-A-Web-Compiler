import { Schema, model } from "mongoose";

interface CodeTypes {
  codeLanguages: {
    html: string;
    css: string;
    javascript: string;
  };
}

const codeSchema = new Schema<CodeTypes>(
  {
    codeLanguages: {
      html: String,
      css: String,
      javascript: String,
    },
  },
  { timestamps: true }
);

export const Code = model("all-codes", codeSchema);
