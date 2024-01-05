import { Schema, model, models } from 'mongoose';

const consoleSchema = new Schema({
  company: String,
  console: String,
  description: String,
  stock: Number,
});

const Console = models.Console || model('Console', consoleSchema);

export default Console;