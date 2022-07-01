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
    let user_ret;
    try {
      const trx = await Database.beginTransaction();
      const dataVet = request.only(["crmv", "expertise", "document", "email"]);
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

      const vet = await Vet.find(id);
      if (!vet) throw new Error();

      const user = await User.findBy("veterinary_id", id);
      if (!user) throw new Error();

      Object.keys(dataVet).forEach((item) => {
        if (
          !!dataVet[item] &&
          dataVet[item] != "" &&
          dataVet[item] !== vet[item]
        )
          dataVet[item] = dataVet[item];
        else delete dataVet[item];
      });

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

        user_ret = user.toJSON();
        delete user_ret.password;

        await trx.commit();
      } catch (error) {
        await trx.rollback();
        throw error;
      }
      return response.send({ Updated: { ...user_ret, ...vet.toJSON() } });
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
