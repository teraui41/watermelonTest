import Posts from './model/Posts'
import Comments from './model/Comments'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

const adapter = new SQLiteAdapter({ dbName: 'imapp', schema });

const database = new Database({
  adapter,
  modelClasses: [Posts, Comments],
})

export default database;