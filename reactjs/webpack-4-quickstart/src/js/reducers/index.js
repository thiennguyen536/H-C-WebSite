import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import addArticle from './addArticle'

export default combineReducers({
  todos,
  visibilityFilter
})