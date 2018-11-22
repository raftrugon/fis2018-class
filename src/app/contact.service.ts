import { Injectable } from '@angular/core';

import { Observable, of, from } from 'rxjs';

import { Contact } from './contact';
import { CONTACTS } from './mock-contact';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }
  serverURL = 'api/v1';

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.serverURL + '/contacts');
  }
}
