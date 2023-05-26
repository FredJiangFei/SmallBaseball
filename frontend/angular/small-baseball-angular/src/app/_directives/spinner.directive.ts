import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSpinner]',
})
export class SpinnerDirective implements OnChanges {
  @Input() appSpinner: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    const loading = changes['appSpinner'].currentValue;
    const text = this.renderer.createText('...');
    if (loading) {
      this.renderer.appendChild(this.elementRef.nativeElement, text);
    }
    this.elementRef.nativeElement.disabled = loading;
  }
}
