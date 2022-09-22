'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class CheckUser {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({request, response, auth }, next) {
    // call next to advance the request
    if(auth.user.role !== "vet" && auth.user.role !== "tutor" )
      return response.status(401).send({message: 'User Not Authorized'})

      request._qs.sender = auth.user.id;

    await next()
  };
}

module.exports = CheckUser
