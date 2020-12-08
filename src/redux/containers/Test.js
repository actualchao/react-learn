import { connect } from 'react-redux'
// import { toggleTodo }  from '../actions'
import  * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
// import TodoList from '../components/TodoList'


function Test(props) {
  console.log(props);

  // console.log(props.addTodo('asdf'));
  console.log(props.actions.addTodo('asdf'));
  return <div>asdfasdf</div>
}

// function mapStateToProps(state) {
//   return { todos: state.todos }
// }

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//     case 'SHOW_ALL':
//     default:
//       return todos
//   }
// }

// const mapStateToProps = state => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const VisibleTodoList = connect(
  null,
  mapDispatchToProps
)(Test)

export default VisibleTodoList