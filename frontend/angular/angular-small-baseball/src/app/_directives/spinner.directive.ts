import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { Spinner } from 'spin.js';

@Directive({
  selector: '[appSpinner]',
})
export class SpinnerDirective implements OnChanges {
  @Input() appSpinner: boolean = false;
  spinner: Spinner = new Spinner({
    scale: 0.7,
    color: '#fff',
  });

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    // const loading = changes.appSpinner.currentValue;
    // if (loading) {
    //   const spinnerEle = this.spinner.spin();
    //   spinnerEle.el.style.display = 'inline-block';
    //   spinnerEle.el.style.position = 'relative';
    //   spinnerEle.el.style.bottom = '5px';
    //   this.renderer.appendChild(this.elementRef.nativeElement, spinnerEle.el);
    // } else {
    //   this.spinner.stop();
    // }
    // this.elementRef.nativeElement.style.paddingRight = loading ? '45px' : '';
    // this.elementRef.nativeElement.disabled = loading;
  }
}
