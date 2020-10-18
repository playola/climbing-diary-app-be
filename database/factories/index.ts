import Factory from '@ioc:Adonis/Lucid/Factory'
import Entry from 'App/Models/Entry'

export const EntryFactory = Factory.define(Entry, ({ faker }) => ({
  title: faker.lorem.sentence(),
  description: faker.lorem.text(),
})).build()
