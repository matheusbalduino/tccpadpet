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
    var largura = window.innerWidth || document.documentElement.clientWidth  || document.body.clientWidth;

    if(largura < 800) this.openedsidebar = false;
  }

  OpenClose(){
    this.openedsidebar = !this.openedsidebar;
  }

}
