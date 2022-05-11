'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Expertise extends Model {
  veterinary(){
    return this.belongsToMany('App/Models/Veterinary')
    .pivotTable('veterinary_expertises')
  }
}

module.exports = Expertise
