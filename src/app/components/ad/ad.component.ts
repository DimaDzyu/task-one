import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-ad',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './ad.component.html',
  styleUrl: './ad.component.scss'
})
export class AdComponent {
  @Input() images: { url: string }[];
  @Input() title: string;
  @Output() addImageEvent: EventEmitter<void> = new EventEmitter();

  addImage(): void {
    this.addImageEvent.emit();
  }
}
