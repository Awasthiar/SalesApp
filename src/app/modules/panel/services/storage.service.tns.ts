import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
    constructor() { }
 
    setStorage(token){
      require('nativescript-localstorage');
      localStorage.setItem('accessToken',token);
    }
  
 }




