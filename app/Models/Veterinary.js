'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Veterinary extends Model {
  user(){
    return this.belongsTo('App/Models/User')
  }
  expertise(){
    this.belongsToMany('App/Models/Expertise')
    .pivotTable('veterinary_expertises')
  }
}

module.exports = Veterinary
