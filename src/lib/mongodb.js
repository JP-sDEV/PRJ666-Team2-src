require('dotenv').config();
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

// Define the desired database name
const DB_NAME = process.env.DB_NAME || 'datasense-db';

let cached = global.mongoose || { conn: null, promise: null };

async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    // Add the dbName option to the mongoose connect method
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: DB_NAME, // Explicitly set the database name
      })
      .then((mongoose) => mongoose);
  }

  console.log('Connected to MongoDB');
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
