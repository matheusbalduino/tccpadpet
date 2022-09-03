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
    if(auth.user.role !== "tutor")
      return response.status(401).send({message: 'User Not Authorized'})
    await next()
  }
}

module.exports = CheckTutor