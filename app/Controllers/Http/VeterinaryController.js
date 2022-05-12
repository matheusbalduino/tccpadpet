'use strict'

const Vet = use('App/Models/Veterinary');

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
  async index ({ request, response, view }) {
  }

  /**
   * Create/save a new veterinary.
   * POST veterinaries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'crmv',
      "email",
      "document",
      'expertise_id'
    ]);

    const dataUser = request.only([
      "username",
      "password",
      "profession",
      "role"
    ])

    try {
      const vet = await Vet.create(data);

      const user = await vet.user().create(dataUser);

      return response.send({
        User: user,
        Vet: vet
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
  async update ({ params, request, response }) {
  }

  /**
   * Delete a veterinary with id.
   * DELETE veterinaries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = VeterinaryController
