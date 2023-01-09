import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  ngOnInit(): void { }

  @Input() userInput: any = {
    name: null,
    category: null,
    firstName: null,
    lastName: null,
    mail: null,
    status: null
  };

  userGroups = [
    { name: "IT", description: "user group" }
  ]
  onEdit(user: any) {

  }

}
