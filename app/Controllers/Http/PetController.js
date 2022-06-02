'use strict'

const Pet = use('App/Models/Pet');
const Tutor = use('App/Models/Tutor');
const {asyncForEach} = use('App/Utils/asyncUtils')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pets
 */
class PetController {
  /**
   * Show a list of all pets.
   * GET pets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    try {
     const pets = await Pet.query().withTutor().fetch();
     return response.send(pets);
    } catch (error) {

    }
  }

    /**
   * Show a list of all pets.
   * GET pets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
     async getPetByTutor ({ response, params }) {
      try {
       const { id } = params;
       const pets = await Pet.query().byTutor(id).fetch();


       return response.send(pets);
      } catch (error) {
        throw error;
      }
    }

  /**
   * Create/save a new pet.
   * POST pets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'name',
      'race',
      'weight',
      'age',
      'description',
      'personality'
    ]);

    const {tutor_id} = request.post();
    try {

      if(!data) throw new Error('Erro ao cadastrar Pet');

      const tutor = await Tutor.findBy('id',tutor_id);
      if(!tutor) throw new Error('Tutor inexistente');

      const pet = await Pet.create(data);

      await pet.tutor().attach(tutor.id);

      return response.send({Pet: pet});

    } catch (error) {
      throw error;
    }

  }

  /**
   * Update pet details.
   * PUT or PATCH pets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a pet with id.
   * DELETE pets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PetController
