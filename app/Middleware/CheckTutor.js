'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class CheckTutor {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth, response}, next) {
    // call next to advance the request
    if(auth.user.role !== "tutor" && auth.user.role !== "admin")
      return response.status(401).send({message: 'User Not Authorized'})

    request._qs.id = auth.user.id;
    request._qs.username = auth.user.username;
    request._qs.tutor_id = auth.user.tutor_id;
    await next()
  }
}

module.exports = CheckTutor
