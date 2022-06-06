'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tutor extends Model {

  /**
   * Scopes
   */

  static scopeMessagesTutor(query, id){
    query.with('messages', ( builder )=> {
      builder.where('tutor_id', id)
    });

    return query;
  }

  /**
   * Relationship
   */
  pets(){
    return this
              .belongsToMany('App/Models/Pet')
              .pivotTable('tutor_pets');
  }
  user(){
    return this.hasOne('App/Models/User')
  }
  plans(){
    return this.hasMany('App/Models/Plan')
  }
  messages(){
    return this.hasMany('App/Models/Message')
  }
  appointments(){
    return this.hasMany('App/Models/Appointment')
  }

}

module.exports = Tutor
