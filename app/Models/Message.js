'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Message extends Model {
  veterinaries(){
    return this.hasMany('App/Models/Veterinary')
  }

  tutors(){
    return this.hasMany('App/Models/Tutor')
  }
}

module.exports = Message
