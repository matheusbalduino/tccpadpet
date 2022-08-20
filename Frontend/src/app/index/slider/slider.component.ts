import { Component, OnInit } from '@angular/core';

const notes =[
  {
    note: 'Item 1',
    updated: 'yes'
  },
  {
    note: 'Item 2',
    updated: 'yes'
  },
  {
    note: 'Item 3',
    updated: 'yes'
  },
  {
    note: 'Item 4',
    updated: 'no'
  },
  {
    note: 'Item 5',
    updated: 'yes'
  },

]
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  notes: Array<notes> = notes
  constructor() { }

  ngOnInit(): void {
  }

}

interface notes {
  note: string,
  updated: string
}
