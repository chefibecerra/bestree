import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI);
        const url= `${connection.host}:${connection.port}/${connection.name}`;
        console.log( colors.bgGreen.bgGreen.italic(`Database connected: ${url}`));
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message));
        process.exit(1);
    }
};