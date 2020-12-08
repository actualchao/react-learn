import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Test from '../containers/Test'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Test></Test>
  </div>
)

export default App