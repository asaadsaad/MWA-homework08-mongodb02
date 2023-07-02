import { Schema, model, InferSchemaType } from 'mongoose';


const schema = new Schema({
    name: { first: String, last: String },
    email: { type: String, unique: true },
    password: String,
    location: { type: [Number], required: false },
    hobbies: { type: [String], required: false }
}, { timestamps: true, versionKey: false })

export type IUser = InferSchemaType<typeof schema>;

export default model<IUser>('user', schema)