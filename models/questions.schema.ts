import { InferSchemaType, Schema } from 'mongoose';

export const questionSchema = new Schema({
    question: String,
    due_date: Number
});

export type IQuestion = InferSchemaType<typeof questionSchema>;
