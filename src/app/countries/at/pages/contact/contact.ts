import { ContactListService } from '@countries/services/contact-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {

  public list: string[];
  constructor(private contactList: ContactListService) {

  }

  ngOnInit() {
    this.list = this.contactList.getList();
  }

}
