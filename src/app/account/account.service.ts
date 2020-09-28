import { Injectable } from '@angular/core';

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

  addAcount(account: {name: string, status: string}){
    this.accounts.push(account);
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
  }
}
