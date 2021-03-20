import Contacto from '../models/Contacto';
import agendaEvent from '../models/AgendaEvent';
import {siteLoginUp} from '../helpers/visitsUp'
import app from '../app';

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
    siteLoginUp();  
    res.render('panel', {
        title: 'Main panel',
        cabecera: 'Main',
        username: req.user.username,
        counterLogin: app.get('counter_logins'), 
        counterMessages:  app.get('counter_messages'),
        counterViews:  app.get('counter_views')      
    });
}

export const panelAdminInfo = async (req, res) => {      
    const messages = await Contacto.find();
    if (messages) {        
        res.render('panelAdminInfo', {
            title: 'Info Api',
            cabecera: 'Api Info',
            username: req.user.username,
            counterLogin: app.get('counter_logins'), 
            counterMessages:  app.get('counter_messages'),
            counterViews:  app.get('counter_views'),
            messages: messages      
        });
    }
    else
    {
        res.render('panelAdminInfo', {
            title: 'Info Api',
            cabecera: 'Api Info',
            username: req.user.username,
            counterLogin: app.get('counter_logins'), 
            counterMessages:  app.get('counter_messages'),
            counterViews:  app.get('counter_views')      
        });
    }
    
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