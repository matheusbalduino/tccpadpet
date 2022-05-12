'use strict'

const Tutor = use('App/Models/Tutor');
const Vet = use('App/Models/Veterinary');

const Schedule = use('App/Models/Schedule')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with schedules
 */
class ScheduleController {
  /**
   * Show a list of all schedules.
   * GET schedules
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    try{
      const schedule = await Schedule.query().allVetTutor().fetch();
      return response.send({schedules:schedule});

    }
    catch(error)
    {
      throw error;
    }
  }

  async veterinarySchedules({params, response}){
    const {vet_id} = params;
    try{
      const schedules = await Schedule.query().scheduleByVet(vet_id).fetch();
      return response.send({schedules: schedules});
    }catch(error){
      throw error;
    }
  }

  /**
   * Create/save a new schedule.
   * POST schedules
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'schedule_date',
      'annotation',
      'veterinary_id',
      'tutor_id'
    ])
    const {
      veterinary_id,
      tutor_id
    } = request.post();
    try
    {
      const tutor = await Tutor.findBy('id', tutor_id);
      if(!tutor) throw new Error("Erro de vinculo tutor");

      const vet = await Vet.findBy('id', veterinary_id);
      if(!vet) throw new Error("Erro de vinculo veterinário");

      const schedule = await Schedule.create(data);

      return response.send({Schedule: schedule});
    }
    catch(error)
    {
      throw error;
    }
  }

  /**
   * Update schedule details.
   * PUT or PATCH schedules/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a schedule with id.
   * DELETE schedules/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ScheduleController
