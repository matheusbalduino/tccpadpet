'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pet extends Model {
  tutors(){
    return this
              .belongsToMany('App/Models/Tutor')
              .pivotTable('tutor_pets');
  }

}

module.exports = Pet
