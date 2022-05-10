'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TutorPetsSchema extends Schema {
  up () {
    this.create('tutor_pets', (table) => {
      table.increments()
      table
          .integer('tutor_id')
          .unsigned()
          .references('id')
          .inTable('tutors')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table
          .integer('pet_id')
          .unsigned()
          .references('id')
          .inTable('pets')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('tutor_pets')
  }
}

module.exports = TutorPetsSchema
