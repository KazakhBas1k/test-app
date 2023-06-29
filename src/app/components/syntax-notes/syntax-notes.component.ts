import { Component } from '@angular/core';

@Component({
  selector: 'app-syntax-notes',
  templateUrl: './syntax-notes.component.html',
  styleUrls: ['./syntax-notes.component.scss']
})
export class SyntaxNotesComponent {
  imgUrl: string = "https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png"
  inputValue: string = "";
  title: string = "Initial";
  backgroundToggleStyle: boolean = false;
  backgroundToggleClass: boolean = false;
  toggle: boolean = false;
  switchInput: number = 1;
  names: string[] = ["Darkhan", "Daryn", "Miras"];
  news = [
    {
      title: "Post1",
      author: "Adlet",
      comments: [{
        name: "User1",
        text: "Lorem ipsum"
      }]
    },
    {
      title: "Post2",
      author: "Askhat",
      comments: [{
        name: "User2",
        text: "Lorem ipsum"
      }]
    }
  ]
  now: Date = new Date();
  constructor() {
  }

  onInput(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onClick() {
    this.inputValue = "";
  }

  onBlur(str: string) {
    this.inputValue = str;
  }

  onSelect(event: Event) {
    this.switchInput = Number((<HTMLInputElement>event.target).value)
  }
}
