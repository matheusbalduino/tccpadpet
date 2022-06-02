'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pet extends Model {
  static scopeWithTutor(query){
    query
        .with('tutor', builder => {
          builder.select(['id', 'description'])
            .with('user', builder => {
              builder.select(['id','tutor_id','username'])
            })
        })
    return query;
  }

  static scopeByTutor(query, tutor_id){
    query
    .select(['id', 'name', 'personality', 'race'])
    .whereHas('tutor')
    .with('tutor', builder => {
      builder.select(['id', 'description'])
      .where('tutor_id', tutor_id)
      .with('user', builder => {
        builder.select(['id','tutor_id','username'])
      })
    })

    return query;
  }

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
