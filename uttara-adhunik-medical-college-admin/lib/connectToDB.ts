import mongoose from "mongoose";

export const connectToDB = async () => {
  const dbUri = process.env.MONGODB_URI as string;

  if (!dbUri) {
    throw new Error("MONGODB_URI environment variable is not defined");
  }

  try {
    await mongoose.connect(dbUri);

    console.log("MongoDB connected");
    console.log("Database:", mongoose.connection.name);
    console.log("Host:", mongoose.connection.host);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};
