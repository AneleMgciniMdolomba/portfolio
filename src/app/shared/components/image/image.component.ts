import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  @Input()
  public image: string = '';

  @Input()
  public altText: string = '';

  @Input()
  public class: string = '';

  @Input()
  public loading: 'lazy' | 'eager' = 'lazy';
}
