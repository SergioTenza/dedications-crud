import {Schema, model} from 'mongoose';

const agendaEventSchema = new Schema({
    title: String,
    start: String,
    end: String,
    allDay: String,
    url: String,
    backgroundColor: String,
    borderColor: String            
},{
    timestamps: true,
    versionKey: false
});

export default model('AgendaEvent', agendaEventSchema);

/*
{
    title          : 'Click for Google',
    start          : new Date(y, m, 28,19, 0),
    end            : new Date(y, m, 29,21,30),
    allDay         : false,
    url            : 'https://www.google.com/',
    backgroundColor: '#3c8dbc', //Primary (light-blue),
    borderColor    : '#3c8dbc' //Primary (light-blue)    
}
*/
