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
      ]);

      const tutor = await Tutor.findBy("id", id);
      if (!tutor) throw new Error("Tutor não existe");

      const user = await User.findBy("tutor_id", id);
      if (!user) throw new Error("Usuário não existe");

      const trx = await Database.beginTransaction();

      try {
        dataTutor.avatar = dataTutor.avatar ? dataTutor.avatar : tutor.avatar;
        dataTutor.document = dataTutor.document
          ? dataTutor.document
          : tutor.document;
        dataTutor.email = dataTutor.email ? dataTutor.email : tutor.email;
        dataTutor.description = dataTutor.description
          ? dataTutor.description
          : tutor.description;

        tutor.merge(dataTutor);
        await tutor.save(trx);

        dataUser.username = dataUser.username
          ? dataUser.username
          : user.username;
        dataUser.password = dataUser.password
          ? dataUser.password
          : user.password;
        dataUser.role = dataUser.role ? dataUser.role : user.role;
        dataUser.profession = dataUser.profession
          ? dataUser.profession
          : user.profession;
        dataUser.tutor_id = 3;

        user.merge(dataUser);
        await user.save(trx);

        await trx.commit();
      } catch (error) {
        await trx.rollback();
        throw error;
      }

      return response.send({ updated: tutor });
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}

module.exports = TutorController;
