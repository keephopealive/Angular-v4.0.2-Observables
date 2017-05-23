import { CommunicateService } from './../communicate.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnDestroy {
  subscription: Subscription;
  users = [];

  constructor(private _communicateService: CommunicateService) {
    this.subscription = _communicateService.usersStream.subscribe( users => {
      this.users = users;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
