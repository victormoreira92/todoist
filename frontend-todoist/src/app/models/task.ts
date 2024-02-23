export interface Task {
  id: number,
  title: string,
  description: string, 
  done: boolean,
  due_date: Date,
  project_id: number
}
