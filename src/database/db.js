import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI || "mongodb+srv://admin:Gxa439CE0IFn0BYu@cluster0.9avx9x6.mongodb.net"}/${process.env.DB_NAME || "KHANA-E-KABA"}`)
        console.log(`\n mongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }catch (error) {
        console.log("mongoDB connection error" , error);
        process.exit(1)
    }
}

export default connectDB