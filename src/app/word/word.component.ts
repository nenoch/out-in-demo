import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  @Input() word;
  @Output() answerChecked: EventEmitter<any> = new EventEmitter();
  checked = false;
  constructor() {}

  ngOnInit() {}

  onChecked(answer){
    this.answerChecked.emit(answer);
  }
}
