'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AppointmentSchema extends Schema {
  up () {
    this.create('appointments', (table) => {
      table.increments()
      table.date('appointment_date')
      table.string('annotation')
      table.string('case')
      table.string('description')
      table.string('treatment')
      table.string('return_appointment')
      table
          .integer('tutor_id')
          .unsigned()
          .references('id')
          .inTable('tutors')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table
          .integer('veterinary_id')
          .unsigned()
          .references('id')
          .inTable('veterinaries')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table
          .integer('schedule_id')
          .unsigned()
          .references('id')
          .inTable('schedules')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('appointments')
  }
}

module.exports = AppointmentSchema
