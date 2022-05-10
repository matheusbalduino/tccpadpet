'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlansSchema extends Schema {
  up () {
    this.create('plans', (table) => {
      table.increments()
      table.string('name')
      table.string('type')
      table.string('value')
      table.string('description')
      table.string('status')
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
    this.drop('plans')
  }
}

module.exports = PlansSchema
