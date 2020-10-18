# Climbing Diary App Backend

## AdonisJs v5 Getting started

### Create basic project and check welcome page:

```
  npm init adonis-ts-app climbing-diary-app-be

  cd climbing-diary-app-be

  node ace serve --watch
```

See http://0.0.0.0:3333/

### Database access

```
  npm i @adonisjs/lucid@alpha

  node ace invoke @adonisjs/lucid@alpha
```

Fill `.env` file with database information and apply the changes `source .env`:

```
  // ...
  DB_USER=root
  DB_PASSWORD=root
  DB_NAME=climbingdiaryapp
```

### Models

Create our first Model. A Model is a JavaScript object to interact with our database, a way to 
interact with the database.

AdonisJs provides a command to create the Model and optionally create the Controller and the Migration files
with the `-cm` param:

```
  node ace make:model entries -cm
```

#### Migration

Let's add two fields: `title` and `description` in the Migration file to update the database:

```
  import BaseSchema from '@ioc:Adonis/Lucid/Schema'

  export default class Entries extends BaseSchema {
    protected tableName = 'entries'

    public async up () {
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id')
        table.timestamps(true)
        table.string('title')
        table.text('description')
      })
    }

    public async down () {
      this.schema.dropTable(this.tableName)
    }
  }
```

Then, we need to run the migration to update the database:

```
  node ace migration:run
```

If it is successful, you will have a new table in `climbingdiaryapp` database. Check it:

```
  psql climbingdiaryapp

  // Inside the shell:

  \dt;

  // Output:
            List of relations
  Schema |     Name      | Type  | Owner 
  --------+---------------+-------+-------
  public | adonis_schema | table | root
  public | entries       | table | root
  (2 rows)
```

Now we will need to add `title` and `description` columns in the Model: `app/Models/entry.js`.

Last thing, it will be to update the Controller. A Controller is a way to group up few methods for
one or more routes. By default, AdonisJs creates a basic set of CRUD routes in our controller.

#### Troubleshooting

If you didn't create the database, when running the migration you will get one of:
  - `error: role "root" does not exist`
  - `error: database "climbingdiaryapp" does not exist`

To solve it, let's create our local database:

```
  // Open Postgres shell:
  psql postgres

  // Inside the shell:
  CREATE DATABASE climbingdiaryapp;

  CREATE USER root WITH ENCRYPTED PASSWORD 'root';

  exit;
```

## References

  * https://preview.adonisjs.com/guides/quick-start/
  * https://docs.rapidminer.com/latest/server/install/database_setup/creating_postgres_db.html
