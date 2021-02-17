import User from '../models/User';
import agendaEvent from '../models/AgendaEvent';
import passport from 'passport';
import {isAuthenticated} from '../helpers/auth'

export const createAgendaEvent = async (req,res) => {
    const {title, start,end,allday,url,backgroundColor,borderColor} = req.body;
    var date = new Date()
        var d    = date.getDate(),
            m    = date.getMonth(),
            y    = date.getFullYear()
    const newAgendaEvent = new agendaEvent ({

    });

    const savedAgendaEvent = await newAgendaEvent.save();

    res.status(200).json({savedAgendaEvent});
};

export const createAgendaEventForm = (req, res) => {
    //let name = a => a != null ? user.username : 'Visitante';        
    res.render('panelCreateAgendaEvent', {
        title: 'Crear evento',
        cabecera: 'Crear evento',
        username: req.user.username        
    });
}

export const panelHome = (req, res) => {    
    res.render('panel', {
        title: 'Main panel',
        cabecera: 'Main',
        username: req.user.username        
    });
}

export const panelContacto = (req, res) => {        
    res.render('panel', {
        title: 'Main panel',
        cabecera: 'Main',
        username: req.user.username        
    });
}

export const calendarPopulate = async (req, res) => {           
    try {                     
        var mongoAgenda = await agendaEvent.find();  
    } catch (error) {
    console.error(error);
    }            
    res.render('panelCalendar', {
        cabecera: 'Agenda',
        username: req.user.username,
        mongoEvents: mongoAgenda
    });
};

export const calendarPopulateById = async () => {           
    try {                     
        var mongoAgenda = await AgendaEvent.findById(req.user.id);;  
    } catch (error) {
    console.error(error);
    }            
    res.render('panelCalendar', {
        cabecera: 'Agenda',
        username: req.user.username,
        mongoEvents: mongoAgenda
    });
};