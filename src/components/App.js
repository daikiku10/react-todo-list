import React from 'react';
import Header from './Header';
import TaskView from './TaskView';
import NewTask from './NewTask';
import TaskDetails from './TaskDetails';
import TaskEdit from './TaskEdit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


const App = () => {
  return(
    <>
    <Router>
      <Header />
      <Switch>
        <Route path='/new_task' component={NewTask} />
        <Route path='/details_task/:taskId' component={TaskDetails} />
        <Route path='/edit_task/:taskId' component={TaskEdit} />
        <Route path='/' component={TaskView} />
      </Switch>
    </Router>      
    </>
  )
}
export default App;
