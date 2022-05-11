'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pet extends Model {
  tutor(){
    return this
              .belongsToMany('App/Models/Tutor')
              .pivotTable('tutor_pets');
  }
  appointments(){
    return this.hasMany('App/Models/Appointments')
  }

}

module.exports = Pet
