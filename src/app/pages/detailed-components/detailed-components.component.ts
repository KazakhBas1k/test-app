import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: 'app-detailed-components',
  templateUrl: './detailed-components.component.html'
})
export class DetailedComponentsComponent implements OnInit {
  posts: Post[] = [
    {title: 'I wanna learn Angular Components', text: 'I still learning components', id: 1},
    // {title: 'Next block', text: 'It will be detailed-directives and pipes', id: 2},
    // {title: 'Today', text: "I'm working and learning Angular", id: 3},
  ]
  // Изменение всего объекта или его ссылки через 5 секунд
  ngOnInit() {
    setTimeout(() => {
      console.log('Timeout');
      this.posts[0] = {
        title: 'Changed',
        text: 'Changed2',
        id: 1
      }
    },5000)
  }
  updatePosts(post: Post) {
    this.posts.unshift(post)
    console.log('Post:', post)
  }

  removePost(id: number) {
    console.log('Id to remove', id);
    this.posts = this.posts.filter(post => post.id !== id)
  }
}
