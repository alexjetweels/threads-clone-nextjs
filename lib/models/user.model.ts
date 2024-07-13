import mongoose from 'mongoose';

const userScheme = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: String,
  bio: String,
  onboarded: {
    type: Boolean,
    default: false,
  },

  threads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
  communities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Community' }],
});

const User = mongoose.models.User || mongoose.model('User', userScheme);

export default User;
