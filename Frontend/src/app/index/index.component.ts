import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public openedsidebar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  OpenClose(){
    this.openedsidebar = !this.openedsidebar;
  }

}
