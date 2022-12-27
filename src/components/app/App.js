import AddTodo from '../AddTodo/AddTodo';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoList from '../TodoList/TodoList';

import './App.sass'


function App() {
  return (<div className='container'>
    <header>
      <h1 className='title'>TODO</h1>
    </header>
    <main className='App'>

      <AddTodo />
      <TodoList />
      <TodoFooter />
    </main>
  </div>
  );
}

export default App;
