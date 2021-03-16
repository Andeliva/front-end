import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  public contactList:Contact[];
  public contactSelected:Contact;
  public searchQuery:string;
  public readonly contactLimit;
  public contactStart;
  public contactOrder;
  public contactListSize;
  public searchParams;
  constructor(private _contactService: ContactService) {
    this.contactList = new Array<Contact>();
    this.contactSelected = new Contact(-1, '','','','','','','','','','');
    this.searchQuery = '';
    this.contactLimit = 4;
    this.contactStart = 0;
    this.contactOrder = 'titulo:asc';
    this.contactListSize = 0;
    this.searchParams = '';
  }

  ngOnInit(): void {
    this._contactService.getContactsListSize(this.searchParams).subscribe(size => {
      this.contactListSize = size;
    }, err => console.log(err));
    this.loadContacts();
  }

  onScroll(){
    if (this.contactStart <= this.contactListSize){
      this.contactStart += this.contactLimit;
      this.loadContacts();
    }
  }

  loadContacts(){
    this._contactService.getContactsListSize(this.searchParams).subscribe(size => {
      this.contactListSize = size;
    }, err => console.log(err));
    this._contactService.getContactsList(this.searchParams,this.contactOrder, this.contactStart, this.contactLimit).subscribe(
      (contacts: Contact[]) => {
        this.contactList.push(...contacts);
        this.splitNumberContact();
      },
      err => {
        console.log(err)
      }
    );
  }

  splitNumberContact(){
    this.contactList.forEach(c => {
      c.numberList = c.numero.split(',');
    })
  }

  showContact(contact:Contact){
    this.contactSelected = contact;
    let contactNumbers: string[] = this.contactSelected.numero.split(',');
  }
  renderFirstLetter(contact:Contact, prev:Contact, index:number){
    if( index > 0 && contact.titulo && prev.titulo){
      const a = contact.titulo[0];
      const b = prev.titulo[0];
      if(a === b ){
        return false;
      }
    }
    return true;
  }

  loadContactListSearch(): void {
    if (this.searchQuery) {
      this.contactList = [];
      this.searchParams = '';
      this.searchParams += `_where[_or][0][titulo_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][1][descripcion_contains]=${this.searchQuery}`;
      this.loadContacts();
    }else{
      this.searchParams = '';
      this.contactStart = 0;
      this.contactList = [];
      this.loadContacts();
    }
  }
}
