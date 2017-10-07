import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Output Input Demo!';
  checked = false;
  sets = [
      {
          name: "blue",
          words: [
              {
                  wname: "sky",
                  answers: []
              },
              {
                  wname: "peacock",
                  answers: []
              }
          ]
      },
      {
          name: "red",
          words: [
              {
                  wname: "cherry",
                  answers: []
              },
              {
                  wname: "blood",
                  answers: []
              }
          ]
      }
  ];

  consoleLog(value){
    console.log(value);
  }

  handleCheckbox(array, answer){
    let index = array.indexOf(answer);
    if (index !== -1 ){
      array.splice(index, 1)
    } else {
      array.push(answer);
      console.log(this.sets);
    }
  }
}
