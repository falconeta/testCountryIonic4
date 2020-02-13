import { Injectable } from '@angular/core';
import { IContactList } from 'app/countries/common/interfaces/contact-list.interface';

@Injectable()
export class ContactListService implements IContactList {
  constructor() {

  }

  public getList() {
    return ['at', 'test at'];
  }
}
