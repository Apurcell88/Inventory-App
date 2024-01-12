import mongoose from 'mongoose';
// import Game from '@/models/game'

let isConnected = false // track the connection status

// export const connectToDB = async () => {
//   // sets mongoose options
//   mongoose.set('strictQuery', true);

//   if (isConnected) {
//     // console.log('MongoDB is already connected');
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: 'game_store',
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })

//     isConnected = true;

//     console.log('MongoDB connected');
    
//   } catch (err) {
//     console.error(err);
//   }
// }