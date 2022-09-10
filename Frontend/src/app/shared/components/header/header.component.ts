import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
   }

  logout(){
    sessionStorage.setItem('logged', 'false')
    this.route.navigate([''])
  }

}
