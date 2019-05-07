import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApisService} from '../../../../shared/services/apis.service';
import * as dialogs from "tns-core-modules/ui/dialogs";




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private myService:ApisService) { }

  ngOnInit() {
  }

  logout() {

    dialogs.confirm({
      title: "Logout",
      message: "Do you want to Logout",
      okButtonText: "OK",
      cancelButtonText: "CANCEL",
    }).then((result) => {
      if (result) {
      console.log("logging out");
      this.myService.logout().subscribe(response => {
      localStorage.removeItem('accessToken');
      console.log('Logged out!');
      this.router.navigate(['']);
    }); }
    else if (!result) {
      console.log("you clicked on cancel button");
    }
})
}
  addeditRecord(){
    this.router.navigate(["/add-edit/add-edit/addedit"]);
   }

}
