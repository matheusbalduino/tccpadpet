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
    .with('users', builder => {
      builder.select(['id', 'username']).where('id', sender)
    })

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

  users(){
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Message
