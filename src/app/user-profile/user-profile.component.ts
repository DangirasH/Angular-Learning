import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  public show: boolean = false;

  public buttonName: string = 'Show';

  ngOnInit() {}

  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'default quote',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  hideQuote() {
    this.show = !this.show;
    if (this.show) this.buttonName = 'Hide';
    else this.buttonName = 'Show';
  }
}