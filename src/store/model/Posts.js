import { Model } from '@nozbe/watermelondb'
import { field, date, children } from '@nozbe/watermelondb/decorators'

class Posts extends Model {
  static table = 'posts'
  static associations = {
    comments: { type: 'has_many', foreignKey: 'post_id' },
  }

  @field('title') title
  @field('body') body
  @field('is_pinned') isPinned
  @date('last_event_at') lastEventAt
  @children('comments') comments
}

export default Posts;

