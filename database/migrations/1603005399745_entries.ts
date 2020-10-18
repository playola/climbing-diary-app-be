import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Entries extends BaseSchema {
  protected tableName = 'entries'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('title')
      table.string('description')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
