import { InferSchemaType, Schema } from 'mongoose';
import { questionSchema } from './questions.schema';

export const lectureSchema = new Schema({
    title: String,
    description: String,
    file_url: String,
    questions: [questionSchema]
});

export type ILecture = InferSchemaType<typeof lectureSchema>;
