import { Schema, model } from "mongoose";

interface IAbout {
  job: String;
  address: String;
  addressNow: String;
  phone: String;
}
const aboutSchema = new Schema<IAbout>({
  job: {
    type: String,
  },
  address: {
    type: String,
  },
  addressNow: {
    type: String,
  },
  phone: {
    type: String,
  },
});
const About = model<IAbout>("About", aboutSchema);
export default About;
