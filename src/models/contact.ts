import { Schema, model } from 'mongoose';
interface Icontact {
  nameCT: String;
}

const contactSchema = new Schema<Icontact>({
  nameCT: {
    type: String,
  },
});

const Contact = model<Icontact>('Contact', contactSchema);
export default Contact;
