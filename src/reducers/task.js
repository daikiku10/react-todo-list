import {ADDTASK} from '../actions/action'

const initialState = {
  tasks:[
    {title:'画面詳細設計',taskDes:'テスト用', person:'鈴木', deadLine:'2021-5-31', startLine:'2021-5-23', flg: false},
    {title:'基本設計', taskDes:'テスト用', person:'鈴木', deadLine:'2021-5-31', startLine:'2021-5-23', flg: false},
    {title:'詳細設計', taskDes:'テスト用', person:'金田', deadLine:'2021-5-31', startLine:'2021-5-23', flg: false},
    {title:'コーディング', taskDes:'テスト用', person:'鈴木', deadLine:'2021-5-31', startLine:'2021-5-23', flg: false},
    {title:'単体テスト', taskDes:'テスト用', person:'金田', deadLine:'2021-5-31', startLine:'2021-5-23', flg: false},
  ]
}

export default(state = initialState, action) => {
  switch(action.type){
    case ADDTASK:
      return {tasks: [...state.tasks,action.data]}
    default:
      return state
  }
}