import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = ['card1', 'card2', 'card3', 'card4'];

  addItem(newItem: string) {
    if(this.cards.length<10){
      this.cards.push(newItem);
    }
    else{
      this.reset();
    }
  }

  reset() {
    const message = confirm("You are not able to add new cards your limit reached");
    if(message === true) {
       this.cards = [];
      }      
  }  

  remove(){
    if(this.cards[this.cards.length-1] != "")
    this.cards.pop();
  }
}
