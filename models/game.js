import { Schema, model, models } from 'mongoose';

// const mongoose = require('mongoose');

const gameSchema = new Schema({
  title: String,
  description: String,
  genre: String,
  platform: String,
  stock: Number,
});

const Game = models.Game || model('Game', gameSchema);

export default Game;