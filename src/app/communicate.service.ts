import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CommunicateService {
 // observable array sources
  private usersSource = new Subject<Array<any>>();

  // observable array streams
  usersStream = this.usersSource.asObservable();


  constructor(){

  }

  updateUsers(users: Array<any>){
    this.usersSource.next(users);
  }
  
}
