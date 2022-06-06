'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Message = require('../../Repository/Message.js');
const Tutor = use('App/Models/Tutor');
const Veterinary = use('App/Models/Veterinary')

/**
 * Resourceful controller for interacting with messages
 */
class MessageController {
  /**
   * Show a list of all messages.
   * GET messages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async getMessagesByTutor ({ params, response }) {
    try {
      const { id } = params;

      const messages = await Tutor.query()
      .where('id', id)
      .select(['id', 'avatar', 'document'])
      .messagesTutor(id)
      .fetch();

      return response.send(messages);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create/save a new message.
   * POST messages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async storeTutor ({ request, response }) {
    const {message_sent,tutor_id,reciever
    } = request.post()
    try{

      const message = new Message(
        tutor_id,
        reciever,
        message_sent
      );

      const ret_message = await message.registerMessageTutor(tutor_id);
      response.status(201).send({message:ret_message})

    }catch(error){
      throw error;
    }
  }
 /**
   * Create/save a new message.
   * POST messages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async storeVet ({ request, response }) {
    const {message_sent,veterinary_id,reciever
    } = request.post()
    try{

      const message = new Message(
        veterinary_id,
        reciever,
        message_sent
      );

      const ret_message = await message.registerMessageVet(veterinary_id);
      response.status(201).send({message:ret_message})

    }catch(error){
      throw error;
    }
  }

  /**
   * Display a single message.
   * GET messages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing message.
   * GET messages/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update message details.
   * PUT or PATCH messages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a message with id.
   * DELETE messages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = MessageController
