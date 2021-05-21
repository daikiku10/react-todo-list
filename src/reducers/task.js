import {ADDTASK} from '../actions/action'

const initialState = {
  tasks:[
    {title:'画面詳細設計', person:'鈴木', flg: false},
    {title:'基本設計', person:'鈴木', flg: false},
    {title:'詳細設計', person:'金田', flg: false},
    {title:'コーディング', person:'鈴木', flg: false},
    {title:'単体テスト', person:'金田', flg: false},
  ]
}

export default(state = initialState, action) => {
  switch(action.type){
    case ADDTASK:
      return state
    default:
      return state
  }
}