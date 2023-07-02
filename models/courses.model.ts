import { Types, InferSchemaType, Schema, model } from 'mongoose';
import { lectureSchema } from '../lectures/lectures.model';

const courseSchema = new Schema({
    code: String,
    title: String,
    created_by: {
        user_id: Types.ObjectId,
        fullname: String,
        email: String
    },
    lectures: [lectureSchema]
}, { timestamps: true, versionKey: false });

export type ICourse = InferSchemaType<typeof courseSchema>;

export default model<ICourse>('course', courseSchema)