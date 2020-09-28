import { Component } from '@angular/core';
import { AccountService } from '../account/account.service';
import { LoggingService } from '../logging/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private logging: LoggingService, private accountService: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAcount({name: accountName, status: accountStatus});
    this.logging.logStatusChange(accountStatus);
  }
}
