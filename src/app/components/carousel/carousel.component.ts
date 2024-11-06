import { Component, Input } from '@angular/core';
import { NgForOf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() images: { url: string }[];
}
