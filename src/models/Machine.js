import {Schema, model} from 'mongoose';

const machineSchema = new Schema({
    name: String,
    location: String,
    user: {
        ref :"User",
        type: Schema.Types.ObjectId
    },
    tasks:[{
        ref :"Task",
        type: Schema.Types.ObjectId
    }]

},{
    versionKey: false
});

export default model('Machine', machineSchema)