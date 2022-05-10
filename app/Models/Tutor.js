'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tutor extends Model {
  pets(){
    return this
              .belongsToMany('App/Models/Pet')
              .pivotTable('tutor_pets');
  }
  user(){
    return this.belongsTo('App/Models/User')
  }
  plans(){
    return this.hasMany('App/Models/Plan')
  }
}

module.exports = Tutors
