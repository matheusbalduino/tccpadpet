'use strict'

const Expertise = use('App/Models/Expertise');

class ExpertiseController{
  /**
   * Show a list of all schedules.
   * GET schedules
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
   async index ({ request, response, view }) {
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
      'name',
      'description'
    ]);

    try
    {
      const expertise = await Expertise.create(data);

      return response.send({Expertise: expertise});
    }
    catch(error)
    {
      throw error;
    }
  }
}


module.exports = ExpertiseController
