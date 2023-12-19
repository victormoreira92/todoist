import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  visible:boolean = false

  tasks = [
    {
      id: 1,
      title: "Task1",
      description: "LoremI",
    },
    {
      id: 2,
      title: "Task1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      id: 3,
      title: "Task1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officia consequatur modi velit obcaecati veritatis voluptas soluta magni odio molestias omnis dolore, consectetur eum quod illum ipsum. Ipsam, quaerat illum.",
    },
    {
      id: 4,
      title: "Task1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 5,
      title: "Task1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 6,
      title: "Task1",
      description: "Lorem ipsum dolor ",
    },
    {
      id: 7,
      title: "Task2",
      description: "Sint officia consequatur modi velit obcaecati veritatis voluptas soluta magni odio molestias omnis dolore, consectetur eum quod illum ipsum. Ipsam, quaerat illum.",
    }
  ]
  openOptions(event: any): void{
    console.log(event.target.offsetParent)
    console.log(this)
    this.visible = !this.visible

  }
}
