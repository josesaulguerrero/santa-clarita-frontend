import { AppointmentService } from './services/appointment/index';

AppointmentService.getInstance().getAll().subscribe(console.log);
