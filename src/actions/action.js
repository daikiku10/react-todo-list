export const ADDTASK = 'addTask'
export const addTask = (data) => ({
  type:ADDTASK,
  data:data
})

export const REMOVETASK = 'removeTask'
export const removeTask = (index) => ({
  type:REMOVETASK,
  index:index
})

export const CHANGEFLG = 'changeFlg'
export const changeFlg = (task,index) => ({
  type:CHANGEFLG,
  flg: !task.flg,
  index:index
})