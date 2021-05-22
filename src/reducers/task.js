import {ADDTASK, CHANGEFLG, EDITTASK, REMOVETASK} from '../actions/action'

const initialState = {
  tasks:[
    {id:0, title:'画面詳細設計',taskDes:'テスト用', person:'鈴木', deadLine:'2021-05-31', startLine:'2021-05-23', flg: false},
    {id:1, title:'基本設計', taskDes:'テスト用', person:'鈴木', deadLine:'2021-05-31', startLine:'2021-05-23', flg: false},
    {id:2, title:'詳細設計', taskDes:'テスト用', person:'金田', deadLine:'2021-05-31', startLine:'2021-05-23', flg: false},
    {id:3, title:'コーディング', taskDes:'テスト用', person:'鈴木', deadLine:'2021-05-31', startLine:'2021-05-23', flg: false},
    {id:4, title:'単体テスト', taskDes:'テスト用', person:'金田', deadLine:'2021-05-31', startLine:'2021-05-23', flg: false},
  ]
}

export default(state = initialState, action) => {
  switch(action.type){
    case ADDTASK:
      if(action.data.title !== ''){
        return {tasks: [...state.tasks,action.data]}
      }else {
        return state
      }
    case EDITTASK:
      if(action.data.title !== ''){
        let copyTask3 = [...state.tasks]
        let index = copyTask3.findIndex(task => task.id === action.data.id)
        copyTask3[index] = action.data
        return {tasks: copyTask3}
      }else {
        return state
      }
    case REMOVETASK:
      let copyTasks = [...state.tasks]
      copyTasks.splice(action.index,1)
      return {tasks: copyTasks}
    case CHANGEFLG:
      let copyTasks2 = [...state.tasks]
      copyTasks2[action.index].flg = action.flg
      return{tasks:copyTasks2}
    default:
      return state
  }
}