import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('class.film') myBackgroundFilm?:boolean

  constructor() { }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myBackgroundFilm = true
  }
  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myBackgroundFilm = false
  }

}