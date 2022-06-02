'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Schedule extends Model {

  /**
   * scopes
   * @param {query} query
   * @returns
   */
  static scopeAllVetTutor(query){
    // builder is a callback, function thats is passed in another function
    query
    .with('veterinary', builder =>{
        builder.select(['id','crmv'])
        .with('user', builder_user => {
          builder_user.select(['username','id'])
        })
    })
    .with('tutor', builder =>{
        builder.select(['id','avatar','description'])
        .with('user', builder_user => {
          builder_user.select(['username','id' ])
        })
    });

    return query;

  }

  static scopeScheduleByVet(query, vet_id){
    query
    .select('schedule_date', 'annotation','id','veterinary_id','tutor_id')
    .where('veterinary_id', vet_id)
    .with('veterinary', builder => {
      builder.select(['id','crmv'])
      .with('user', builder_user => { builder_user.select(['veterinary_id','username','profession'])})
    })
    .with('tutor', builder => {
      builder.select(['id', 'avatar', 'description'])
      .with('user', builder_user => {
        builder_user.select(['tutor_id', 'username', 'profession']);
      })
    })
  }

  veterinary(){
    return this.belongsTo('App/Models/Veterinary')
  }
  tutor(){
    return this.belongsTo('App/Models/Tutor')
  }
  pet(){
    return this.belongsTo('App/Models/Pet')
  }


}

module.exports = Schedule
