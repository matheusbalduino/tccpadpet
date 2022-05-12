'use strict'

const Tutor = use('App/Models/Tutor');

class TutorController{
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
      'avatar',
      "document",
      "email",
      'description'
    ]);

    const dataUser = request.only([
      "username",
      "password",
      "role",
      "profession"
    ]);

    try {
      const tutor = await Tutor.create(data);

      const user = await tutor.user().create(dataUser);

      return response.send({
        User: user,
        Tutor: tutor
      });
    }
    catch(error)
    {
      throw error;
    }
  }
}


module.exports = TutorController
