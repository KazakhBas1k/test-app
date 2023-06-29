import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private el: ElementRef) {
    console.log(el)
  }
}
