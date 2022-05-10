'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PetsSchema extends Schema {
  up () {
    this.create('pets', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('race').notNullable()
      table.string('weight').notNullable()
      table.string('age').notNullable()
      table.string('description').notNullable()
      table.string('personality').notNullable()

    })
  }

  down () {
    this.drop('pets')
  }
}

module.exports = PetsSchema
