import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging/logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService){}

  statusUpdated = new EventEmitter();

  addAcount(account: {name: string, status: string}){
    this.accounts.push(account);
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
