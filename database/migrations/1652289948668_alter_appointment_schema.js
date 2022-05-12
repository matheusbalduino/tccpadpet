'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterAppointmentSchema extends Schema {
  up () {
    this.table('appointments', (table) => {
      // alter table
      table
          .integer('pet_id')
          .unsigned()
          .references('id')
          .inTable('pets')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
        .after('schedule_id')
    })
  }

  down () {
    this.table('appointments', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterAppointmentSchema
