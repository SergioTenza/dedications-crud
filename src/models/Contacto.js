import {Schema, model} from 'mongoose';

const contactoSchema = new Schema({
    name: String,
    email: String,
    asunto: String,
    mensaje: String
},{
    timestamps:true,
    versionKey:false 
});

export default model('Contacto', contactoSchema)