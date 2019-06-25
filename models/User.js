const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // `name` must be unique and of type String
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  characters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Character'
    }
  ]
})

const User = mongoose.model('User', UserSchema);

module.exports = User;