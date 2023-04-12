import { Schema, model } from 'mongoose';

interface ISkill {
  nameSkill: String;
  presenSkill: String;
}
const skillSchema = new Schema<ISkill>({
  nameSkill: {
    type: String,
  },
  presenSkill: {
    type: String,
  },
});
const Skill = model<ISkill>('Skill', skillSchema);
export default Skill;
