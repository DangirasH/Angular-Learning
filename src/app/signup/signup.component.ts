import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

user: User = new User();

  constructor() { }

  onSubmit() {
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}