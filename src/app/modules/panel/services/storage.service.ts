import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getStorage(){
     localStorage.getItem('accessToken');
  }
  setStorage(token){
      localStorage.setItem('accessToken',token);
  }
}

 

