import { combineReducers } from 'redux'
import post from '../post/post.reducer'
import count from './../count/count.reducer'
import menu from '../menu/menu.reducer'
import include from '../include/include.reducer'
import list_post from '../list-post/list-post.reducer'
export default combineReducers({
  post,
  count,
  menu,
  include,
  list_post
})
