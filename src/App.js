import express from 'express';
import session from 'express-session';
import path from 'path';
import morgan from'morgan';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import passport from 'passport';
import dotenv from 'dotenv';

import {createCounter, createRoles} from './libs/initialSetup';
import {siteViewsId} from './helpers/visitsUp'

import baseRoutes from './routes/base.routes';
import panelRoutes from './routes/panel.routes';

const app = express();
require('./config/passport');

dotenv.config();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 5000);
app.set('counter_logins', 0);
app.set('counter_views', 0);
app.set('counter_messages', 0);


createRoles();
createCounter();
siteViewsId();


app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null; 
    next();
})

app.use(morgan('dev'));
app.use(express.json());
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join('/adminlte',__dirname, "/node_modules/admin-lte/")));

app.use('/', baseRoutes);
app.use('/panel', panelRoutes);


export default app;