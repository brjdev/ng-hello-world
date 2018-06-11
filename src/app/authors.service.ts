import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  getAuthours() {
    return ['William Shakespear', 'J.R.R. Tolkien', 'C.S. Lewis']
  }



}
