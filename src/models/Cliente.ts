import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const dataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    }
  },
  { timestamps: true }
);

dataSchema.pre('save', async function (next) {
  const passwordHash = await bcrypt.hash(this.password, 10);
  this.password = passwordHash;

  next();
});

const cliente = mongoose.model('Cliente', dataSchema);

export default cliente;
