import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicateService {

  subject = new BehaviorSubject(null);

  updateUsers(users: Array<any>){
    this.subject.next(users);
  }

}
