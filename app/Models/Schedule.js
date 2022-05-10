'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Schedule extends Model {
  veterinary(){
    this.belongsTo('App/Models/Veterinary')
  }
  tutor(){
    this.belongsTo('App/Models/Tutor')
  }


}

module.exports = Schedule
