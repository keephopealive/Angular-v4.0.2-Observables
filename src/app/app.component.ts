import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicateService } from './communicate.service';
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  users = [
    {email:'a@a.com'},
    {email:'b@b.com'}
  ]

  constructor(private _communicateService: CommunicateService) {
    this._communicateService.subject.next(this.users);
  }

  changeOne(){
    this.users = [
      {email:'a@a.com'},
      {email:'b@b.com'}
    ]
    this._communicateService.updateUsers(this.users)
  }
  changeTwo(){
    this.users = [
      {email:'aa@aa.com'},
      {email:'bb@bb.com'}
    ]
    this._communicateService.updateUsers(this.users)
  }
  changeThree(){
    this.users = [
      {email:'aaa@aaa.com'},
      {email:'bbb@bbb.com'}
    ]
    this._communicateService.updateUsers(this.users)
  }

}
