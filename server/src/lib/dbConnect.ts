import mongoose from "mongoose";

export const connect = async (url: string) => {
  try {
    await mongoose
      .connect(url, { dbName: "code-data" })
      .then(() => console.log("DB connected"));
  } catch (error) {
    console.log(error);
  }
};
