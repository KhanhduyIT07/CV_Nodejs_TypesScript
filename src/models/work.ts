import { Schema, model } from 'mongoose';

interface IWork {
  img: String;
}
const workSchema = new Schema<IWork>({
  img: {
    type: String,
  },
});
const Work = model<IWork>('Work', workSchema);
export default Work;
