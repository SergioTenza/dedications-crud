import {Router} from 'express';
import AgendaEvent from '../models/AgendaEvent'
import * as panelCtrl from '../controllers/panel.controller'
import { isAuthenticated } from '../helpers/auth';



const router = Router();

router.get('/', isAuthenticated, panelCtrl.panelHome);

router.get('/', isAuthenticated, panelCtrl.panelContacto);

router.get('/calendar', isAuthenticated, panelCtrl.calendarPopulate);

router.get('/admin/info', isAuthenticated, panelCtrl.panelAdminInfo);

router.get('/calendar/create', isAuthenticated, panelCtrl.createAgendaEventForm);

router.post('/calendar/create', isAuthenticated, panelCtrl.createAgendaEvent);

export default router;