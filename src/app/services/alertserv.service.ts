import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertservService {

  constructor() { }

  success(message: string): any {
    alertify.success(message);
  }

  danger(message: string): any {
    alertify.error(message);
  }
}
