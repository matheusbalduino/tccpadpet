'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Appointment extends Model {
  tutors(){
    return this.hasMany('App/Models/Tutor')
  }
  veterinaries(){
    return this.hasMany('App/Models/Veterinary')
  }
  schedule(){
    return this.hasMany('App/Models/Schedule')
  }
}

module.exports = Appointment
