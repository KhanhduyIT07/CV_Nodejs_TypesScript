import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect('mongodb+srv://TomDev:ghghfgvbh123@cluster0.utxdpxz.mongodb.net/CV_tsNode');
    console.log('DB connected OKK !!');
  } catch (error) {
    console.log('DB connected fail !!');
  }
}
