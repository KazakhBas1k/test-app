import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../../pages/detailed-components/detailed-components.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // Улавливает изменения которые поступают только с @Input
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Делает стили глобальными
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  // Получение параметров из родительского компонента
  @Input() post!: Post;
  // Доступ до контента компонента
  @ContentChild('info', {static: true}) infoRef!: ElementRef
  @Output() onRemove = new EventEmitter<number>()
  removePost() {
    this.onRemove.emit(this.post.id)
  }
  constructor() {
    console.log('constructor')
  }
  // Хуки жизненного цикла компонента
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    // console.log(this.infoRef.nativeElement)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}
