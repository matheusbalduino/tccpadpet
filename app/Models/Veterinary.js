'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Veterinary extends Model {

  /**
   * Scope
   */
  static scopeMessagesVeterinary(query, id){
    query.with('messages', (builder) => {
      builder.where('veterinary_id', id)
    });

    return query;
  }

  /*
  * Relationship
  */
  user(){
    return this.hasOne('App/Models/User')
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
