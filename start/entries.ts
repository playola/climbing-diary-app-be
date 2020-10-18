import Route from '@ioc:Adonis/Core/Route'
import { EntryFactory } from 'Database/factories'

Route.get('/entries', 'EntriesController.get')

Route.get('/seed-entries', async () => {
  await EntryFactory.createMany(3)
})
