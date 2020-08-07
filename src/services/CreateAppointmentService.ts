import { startOfHour } from 'date-fns';
import { getCustomRepository } from "typeorm";

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

// DTO
interface Request {
  provider: string;
  date: Date;
}


class CreateAppointmentService {
  public async execute({ date, provider }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date); // regra de negocio

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    /* Não permite mais de um agendamento por horário */
    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment)

    return appointment;
  }
}

export default CreateAppointmentService;
