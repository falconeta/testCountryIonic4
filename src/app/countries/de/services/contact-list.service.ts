import { IContactList } from './../../common/interfaces/contact-list.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactListService implements IContactList {
  constructor() {

  }

  public getList(): string[] {
    return ['de', 'test de'];
  }
}
