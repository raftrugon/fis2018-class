import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../mock-contact';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-editable-contact]',
  templateUrl: './editable-contact.component.html',
  styleUrls: ['./editable-contact.component.css']
})
export class EditableContactComponent implements OnInit {

  constructor() { }
  @Input() contact: Contact;
  contactos = CONTACTS;

  editable = false;
  ngOnInit() {
  }



  onEdit() {
  this.editable = !this.editable;
  }

  delete() {
    // this.contactos.pop(this.contact);
  }

}
