import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logStatusChange = (status) => {
    console.log('Server status changed, New Status = ', status);
  }
}
