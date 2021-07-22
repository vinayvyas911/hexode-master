import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  blogTitle = ' - Hexode blog';
  baseURL = 'http://localhost:4200/';
  constructor() {}
}
