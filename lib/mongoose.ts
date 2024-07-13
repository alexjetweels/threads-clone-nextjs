import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  const mongoUri = process.env.MONGODB_URL;
  if (!mongoUri) {
    console.log('MONGODB_URL is not defined');
  }

  if (isConnected) return console.log('Already connected to DB');

  try {
    await mongoose.connect(mongoUri as string);
  } catch (error) {
    console.log('Error connecting to DB', error);
  }
};
