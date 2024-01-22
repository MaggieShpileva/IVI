import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shpilevarita:Hbnf20051997@cluster0.lb9x1sg.mongodb.net/users?retryWrites=true&w=majority"
    );
    console.log("Connect to MongoBD");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
