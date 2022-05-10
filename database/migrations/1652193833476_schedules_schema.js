'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchedulesSchema extends Schema {
  up () {
    this.create('schedules', (table) => {
      table.increments()
      table.datetime('schedule_date')
      table.string('annotation').nullable()
      table
          .integer('veterinary_id')
          .unsigned()
          .references('id')
          .inTable('veterinaries')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table
          .integer('tutor_id')
          .unsigned()
          .references('id')
          .inTable('tutors')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('schedules')
  }
}

module.exports = SchedulesSchema
