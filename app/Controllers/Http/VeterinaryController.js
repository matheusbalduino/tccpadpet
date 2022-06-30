"use strict";

const Vet = use("App/Models/Veterinary");
const User = use("App/Models/User");
const Database = use("Database");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with veterinaries
 */
class VeterinaryController {
  /**
   * Show a list of all veterinaries.
   * GET veterinaries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Create/save a new veterinary.
   * POST veterinaries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(["crmv", "email", "document", "expertise_id"]);

    const dataUser = request.only([
      "username",
      "password",
      "profession",
      "role",
    ]);

    try {
      const vet = await Vet.create(data);

      const user = await vet.user().create(dataUser);

      return response.send({
        User: user,
        Vet: vet,
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update veterinary details.
   * PUT or PATCH veterinaries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    try {
      const trx = await Database.beginTransaction();
      const dataVet = request.only(["crmv", "expertise", "document", "email"]);
      const dataUser = request.only([
        "username",
        "password",
        "role",
        "profession",
      ]);

      const vet = await Vet.find(id);
      if (!vet) throw new Error();

      const user = await User.findBy("veterinary_id", id);
      if (!user) throw new Error();

      dataVet.crmv = dataVet.crmv ? dataVet.crmv : delete dataVet.crmv;
      dataVet.document = dataVet.document
        ? dataVet.document
        : delete dataVet.document;
      dataVet.email = dataVet.email ? dataVet.email : delete dataVet.email;

      if (dataVet.expertise) {
        dataVet.expertise_id = dataVet.expertise;
        delete dataVet.expertise;
      } else {
        dataVet.expertise_id = vet.expertise_id;
        delete dataVet.expertise;
      }

      try {
        vet.merge(dataVet);
        await vet.save(trx);

        dataUser.username = dataUser.username
          ? dataUser.username
          : delete dataUser.username;
        dataUser.password = dataUser.password
          ? dataUser.password
          : delete dataUser.password;
        dataUser.role = dataUser.role ? dataUser.role : delete dataUser.role;
        dataUser.profession = dataUser.profession
          ? dataUser.profession
          : delete dataUser.profession;

        user.merge(dataUser);
        await user.save(trx);

        await trx.commit();
      } catch (error) {
        await trx.rollback();
        throw error;
      }
      return response.send({ Updated: "updated" });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete a veterinary with id.
   * DELETE veterinaries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = VeterinaryController;
