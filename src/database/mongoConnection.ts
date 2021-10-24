import mongoose, { ConnectOptions } from 'mongoose';

mongoose.connect(process.env.BD_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as ConnectOptions);

const dbConnection = mongoose.connection;
dbConnection.on('error', (error) => console.log(`Connection error ${error}`));
dbConnection.once('open', () => console.log('Connected to DB!'));
