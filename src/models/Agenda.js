import {Schema, model} from 'mongoose';

const agendaSchema = new Schema({
    tasks:[{        
        ref:"Task",
        type: Schema.Types.ObjectId        
    }]
},{
    timestamps: true,
    versionKey: false
});

export default model('Agenda', agendaSchema);