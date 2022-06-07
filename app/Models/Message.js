'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const typeUser = {
    vet(query){
      query
      .with('veterinaries')

      return query;
    },

    tutor(query){
      query
      .with('tutors')

      return query;
    }
}

class Message extends Model {

  /**
   * Scope
   */
  static scopeGetSender(query, type_user){

    return typeUser[type_user](query);

  }

  static scopeGetSenderByUser(query, sender, reciever){
    query
    .with('users_sender', builder => builder.select(['id', 'username']))
    .with('users_reciever', builder => builder.select(['id', 'username']))

    return query;

  }


  /*
  * Relationship
  */
  veterinaries(){
    return this.belongsTo('App/Models/Veterinary')
  }

  tutors(){
    return this.belongsTo('App/Models/Tutor')
  }

  users_sender(){
    return this.belongsTo('App/Models/User', 'sender', 'id')
  }

  users_reciever(){
    return this.belongsTo('App/Models/User', 'reciever', 'id')
  }
}

module.exports = Message
