import { Component } from '@angular/core';

import { Box } from './models/box/box';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss']
})
export class DynamicDivsComponent {
  boxes: Box[];
  constructor() {
    this.boxes = Array.from({ length: 12 }, (_, i) => (new Box(i + 1 )));
  }

  // add divs dynamically on scroll
  onScroll = () => {
    const length = this.boxes.length;
    for (let i = length + 1; i <= length + 4; i++) {
      this.boxes?.push(new Box(i));
    }
  }
}
