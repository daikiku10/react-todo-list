import {ADDTASK, CHANGEFLG, REMOVETASK} from '../actions/action'

const initialState = {
  tasks:[
    {id:0, title:'画面詳細設計',taskDes:'テスト用', person:'鈴木', deadLine:'2021-5-31', startLine:'2021-5-23', flg: false},
    {id:1, title:'基本設計', taskDes:'テスト用', person:'鈴木', deadLine:'2021-5-31', startLine:'2021-5-23', flg: false},
    {id:2, title:'詳細設計', taskDes:'テスト用', person:'金田', deadLine:'2021-5-31', startLine:'2021-5-23', flg: false},
    {id:3, title:'コーディング', taskDes:'テスト用', person:'鈴木', deadLine:'2021-5-31', startLine:'2021-5-23', flg: false},
    {id:4, title:'単体テスト', taskDes:'テスト用', person:'金田', deadLine:'2021-5-31', startLine:'2021-5-23', flg: false},
  ]
}

export default(state = initialState, action) => {
  switch(action.type){
    case ADDTASK:
      return {tasks: [...state.tasks,action.data]}
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