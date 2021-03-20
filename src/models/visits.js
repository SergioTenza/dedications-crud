import {Schema, model} from 'mongoose';

const visitSchema = new Schema({
    counterLogin:{
        type: Number,
        required: true
    },
    counterViews:{
        type: Number,
        required: true
    },
    counterMessages:{
        type: Number,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
});

export default model('Visits', visitSchema)