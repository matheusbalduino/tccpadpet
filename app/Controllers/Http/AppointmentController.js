"use strict";

const Appointment = use("App/Models/Appointment");
const LineReaderSync = require("line-reader-sync");
const { writeFileSync } = require("fs");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with appointments
 */
class AppointmentController {
  /**
   * Show a list of all appointments.
   * GET appointments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Create/save a new appointment.
   * POST appointments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only([
      "appointment_date",
      "annotation",
      "case",
      "description",
      "treatment",
      "return_appointment",
      "tutor_id",
      "veterinary_id",
      "schedule_id",
    ]);

    const appointment = await Appointment.create(data);

    return response.status(200).send({ appointment: appointment });
  }

  /**
   * Update appointment details.
   * PUT or PATCH appointments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const data = request.only([
      "appointment_date",
      "annotation",
      "case",
      "description",
      "treatment",
      "return_appointment",
      "tutor_id",
      "veterinary_id",
      "schedule_id",
    ]);
    try {
      if (!data) throw new Error("Erro de dados");

      const appointment = await Appointment.find(id);
      if (!appointment) throw new Error("Não existe consulta");

      appointment.merge(data);
      await appointment.save();

      return response.send({ appointment });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete a appointment with id.
   * DELETE appointments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}

  async readFile({ request, response }) {
    try {
      const path = "tmp/01e04e3e-e09d-423a-af46-239c2599bff5-file.rem";
      const lines = new LineReaderSync(path).toLines();

      let txt = [];
      let line = lines.shift();
      while (line) {
        txt.push(line);
        line = lines.shift();
      }
      console.log(txt);
      writeFileSync("tmp/teste2.rem", txt.join("\n"));

      return response.status(200).send({ lines: lines });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AppointmentController;
