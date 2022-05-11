'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Appointment extends Model {
  tutors(){
    return this.belongsTo('App/Models/Tutor')
  }
  veterinaries(){
    return this.belongsTo('App/Models/Veterinary')
  }
  schedule(){
    return this.belongsTo('App/Models/Schedule')
  }
  pets(){
    return this.belongsTo('App/Models/Pet')
  }
}

module.exports = Appointment
