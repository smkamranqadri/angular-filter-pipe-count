import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos = [
    { id: 7411, title: 'Todo number one', done: true },
    { id: 7511, title: 'Another one', done: false },
    { id: 8521, title: 'Another day in paradise', done: true },
  ];

  trackElement(index: number, element: any) {
    return element ? element.id : null;
  }

  toggleTask(todo: any) {
    console.log('todo', todo);
    todo.done = !todo.done;
    console.log('todo', todo);
  }
}
