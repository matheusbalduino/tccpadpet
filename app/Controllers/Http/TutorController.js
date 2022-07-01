"use strict";

const { HttpException } = use("@adonisjs/generic-exceptions");
const Tutor = use("App/Models/Tutor");
const User = use("App/Models/User");
const Database = use("Database");

class TutorController {
  /**
   * Show a list of all schedules.
   * GET schedules
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Create/save a new schedule.
   * POST schedules
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(["avatar", "document", "email", "description"]);

    const dataUser = request.only([
      "username",
      "password",
      "role",
      "profession",
    ]);

    try {
      const tutor = await Tutor.create(data);

      const user = await tutor.user().create(dataUser);

      return response.send({
        User: user,
        Tutor: tutor,
      });
    } catch (error) {
      throw error;
    }
  }

  async update({ request, response, params }) {
    try {
      const { id } = params;

      const dataTutor = request.only([
        "avatar",
        "document",
        "email",
        "description",
      ]);
      const dataUser = request.only([
        "username",
        "password",
        "role",
        "profession",
        "street",
        "number",
        "neighborhood",
        "zip_code",
        "city",
        "state",
        "country",
      ]);

      const tutor = await Tutor.findBy("id", id);
      if (!tutor) throw new Error("Tutor não existe");

      const user = await User.findBy("tutor_id", id);
      if (!user) throw new Error("Usuário não existe");

      const trx = await Database.beginTransaction();

      try {

        Object.keys(dataTutor).forEach((item) => {
          if (
            !!dataTutor[item] &&
            dataTutor[item] != "" &&
            dataTutor[item] !== tutor[item]
          )
            dataTutor[item] = dataTutor[item];
          else delete dataTutor[item];
        });

        tutor.merge(dataTutor);
        await tutor.save(trx);

        Object.keys(dataUser).forEach((item) => {
          if (
            !!dataUser[item] &&
            dataUser[item] != "" &&
            dataUser[item] !== user[item]
          )
            dataUser[item] = dataUser[item];
          else delete dataUser[item];
        });

        user.merge(dataUser);
        await user.save(trx);

        await trx.commit();
      } catch (error) {
        await trx.rollback();
        throw error;
      }

      return response.send({
        updated: { ...tutor.toJSON(), ...user.toJSON() },
      });
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}

module.exports = TutorController;
