import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: "[appStyle]"
})
export class StyleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  // @HostListener('click', ['$event.target'])
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', null)
  }

}
