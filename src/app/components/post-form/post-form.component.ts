import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Post} from "../../pages/detailed-components/detailed-components.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  // Передача параметров из дочернего в родительский
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  // Доступ до элемента внутри компонента
  @ViewChild('titleInput', {static: false}) inputRef!: ElementRef

  title = '';
  text = "";
 constructor() {
 }

  addPost() {
   if (this.text.trim() && this.title.trim()) {
     const post: Post = {
       title: this.title,
       text: this.text
     }
     this.onAdd.emit(post)
     console.log('New Post', post)
     this.text = this.title = '';
   } else {
     alert("Пожалуйста, заполните все поля")
   }
  }

  focusTitle() {
   console.log(this.inputRef.nativeElement)
   this.inputRef.nativeElement.focus()
  }
}
