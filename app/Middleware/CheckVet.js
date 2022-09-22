'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class CheckVet {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth, response }, next) {
    // call next to advance the request
    if(auth.user.role !== "vet" && auth.user.role !== "admin")
      return response.status(401).send({message: 'User Not Authorized'})

    request._qs.id = auth.user.id;
    request._qs.username = auth.user.username;
    request._qs.veterinary_id = auth.user.veterinary_id;
    await next()
  }
}

module.exports = CheckVet
