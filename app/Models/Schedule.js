'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Schedule extends Model {
  veterinary(){
    return this.belongsTo('App/Models/Veterinary')
  }
  tutor(){
    return this.belongsTo('App/Models/Tutor')
  }
  pet(){
    return this.belongsTo('App/Models/Pet')
  }


}

module.exports = Schedule
