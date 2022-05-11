'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Veterinary extends Model {
  user(){
    return this.belongsTo('App/Models/User')
  }
  expertise(){
    return this.belongsToMany('App/Models/Expertise')
    .pivotTable('veterinary_expertises')
  }
  messages(){
    return this.hasMany('App/Models/Message')
  }
  appointments(){
    return this.hasMany('App/Models/Appointment')
  }
  schedule(){
    return this.hasMany('App/Models/Schedule')
  }
}

module.exports = Veterinary
