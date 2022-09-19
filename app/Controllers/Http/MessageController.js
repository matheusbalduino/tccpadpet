'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Message = require('../../Repository/Message.js');
const Messages = use('App/Models/Message');
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
  async getMessagesSender({ params, response }) {
    try {
      const { sender, reciever } = params;

      const message = await Messages.query()
        .select(['tutor_id', 'veterinary_id', 'message', 'sender', 'reciever'])
        .whereIn('sender', [sender, reciever])
        .whereIn('reciever', [sender, reciever])
        .andWhere('selfsender', false)
        .getSenderByUser(sender, reciever)
        .fetch();

      return response.send(message);

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
  async store({ request, response }) {
    const { message_sent, sender, reciever, selfsender
    } = request.post()
    try {

      const message = new Message(
        sender,
        reciever,
        message_sent,
        selfsender
      );

      const ret_message = await message.registerMessage();
      response.status(201).send({ message: ret_message })

    } catch (error) {
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
  async show({ params, request, response, view }) {
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
  async edit({ params, request, response, view }) {
  }

  /**
   * Update message details.
   * PUT or PATCH messages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a message with id.
   * DELETE messages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = MessageController
