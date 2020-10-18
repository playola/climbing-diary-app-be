import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Entry from 'App/Models/Entry'

export default class EntriesController {
  public async get (ctx: HttpContextContract) {
    const entries = await Entry.all()
    return entries
  }

  public async create (ctx: HttpContextContract) {
  }

  public async store (ctx: HttpContextContract) {
  }

  public async show (ctx: HttpContextContract) {
  }

  public async edit (ctx: HttpContextContract) {
  }

  public async update (ctx: HttpContextContract) {
  }

  public async destroy (ctx: HttpContextContract) {
  }
}
