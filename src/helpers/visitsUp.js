import app from '../app'
import mongoose from 'mongoose';
import siteViews from '../models/visits';


export const siteViewsId = async () => {
    const counter = await siteViews.findOne()
    if (!counter) return;         
    app.set('counter_id', counter._id);
    app.set('counter_logins', counter.counterLogin);
    app.set('counter_views', counter.counterViews);
    app.set('counter_messages', counter.counterMessages);
    console.log(counter)   
};

export const siteViewsUp = async () => {
    try {
        let id = app.get('counter_id');
        const updatedCounter = await siteViews.findByIdAndUpdate(id, {$inc: {counterViews: 1}}, {new:true})
        app.set('counter_views', updatedCounter.counterViews); 
        console.log(app.get('counter_views'));               
    } catch (error) {
        console.error(error)
    }    
};

export const siteMessagesUp = async () => {
    try {
        let id = app.get('counter_id');
        const updatedCounter = await siteViews.findByIdAndUpdate(id, {$inc: {counterMessages: 1}}, {new:true})        
        app.set('counter_messages', updatedCounter.counterMessages);
        console.log(app.get('counter_messages'));
    } catch (error) {
        console.error(error)
    }    
};

export const siteLoginUp = async () => {
    try {
        let id = app.get('counter_id');
        const updatedCounter = await siteViews.findByIdAndUpdate(id, {$inc: {counterLogin: 1}}, {new:true})        
        app.set('counter_logins', updatedCounter.counterLogin);
        console.log(app.get('counter_logins'));
    } catch (error) {
        console.error(error)
    }    
};