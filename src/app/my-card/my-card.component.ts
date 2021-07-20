import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {


  @Output() card = new EventEmitter<string>();

  addNewItem(value: string) {
    this.card.emit(value);
  }

  ngOnInit(): void {
    
  }
}
