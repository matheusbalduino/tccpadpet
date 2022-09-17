import { Component, OnInit } from '@angular/core';
import { Tutor } from '../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['email', 'first_name', 'last_name', 'username'];
  dataSource: Tutor[] = [];

  constructor() { }


  ngOnInit(): void {
  }

}
