import { Component } from '@angular/core';
import { AdComponent } from "../ad/ad.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AdComponent
  ],
  templateUrl: './main.component.html',
})
export class MainComponent {
  title: string = 'My Ad'
  images: { url: string }[] = [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' },
  ];

  addNewImage(): void {
    this.images.push({ url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Google_logo_%281997-1999%29.jpg' })
  }
}
