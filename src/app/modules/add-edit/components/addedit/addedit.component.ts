import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { isAndroid } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';
//import { ViewChild, ElementRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApisService} from '../../../../shared/services/apis.service';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'; 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
//import {Team} from '~/app/modules/dashboard/components/teams-list/team.ts';

declare var android: any;


@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})

export class AddeditComponent implements OnInit {
  // @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
  // inboundClick : boolean ;
  // outboundClick : boolean;
  teamdata:any;
  // title: any;
  // i:any;
  newteam:any;

  constructor(private fb: FormBuilder,private router:Router,  private page: Page,private myService:ApisService) {}


      addTeamForm = this.fb.group({
      team_name : ['',Validators.required],
      amount : ['',Validators.required],
      
      })

     
  ngOnInit() {

  // this.list();
  // console.log(this.list)
  //   if(this.route.snapshot.queryParamMap.get('team_name')== '' && this.route.snapshot.queryParamMap.get('amount')== '' ){
  //         this.title= "Add Team"
  //       }
  //   else{
  //         this.title="Update Team"
  //       }
    }
      
  // list(){
  //       this.myService.getTeams().subscribe(res =>{
  //         this.teamdata = res.data;
  //       console.log(this.teamdata);
  //     });
  //  }

  addTeam(data){
    //if(this.route.snapshot.queryParamMap.get('team_name')== '' && this.route.snapshot.queryParamMap.get('amount')== '' )
    //{ 
    this.myService.addTeam(this.addTeamForm.value).subscribe(data =>{
      this.newteam = data;
      this.router.navigate(["/dashboard/dashboard/teams-list"]);
      console.log(this.newteam);
    })
  }
     // });
//     //}
//     else
//     {
//       this.i= this.route.snapshot.paramMap.get('id');
//       console.log(this.i);

//       data = {
//         team_id:this.teamdata[this.i].team_id,
//         team_name : this.addTeamForm.get('team_name').value,
//         amount :this.addTeamForm.get('amount').value
//       }
//       console.log(data);
//       this.myService.updateTeam(data).subscribe(response =>{
//       console.log(response);
// // console.log( this.teamdata[this.i].team_name);
//       console.log( data.team_name);
//       this.teamdata[this.i].team_name = data.team_name;
//       this.teamdata[this.i].amount = data.amount;
// // console.log(this.teamdata[this.i]);
//       this.router.navigate(['/dashboard/dashboard/teams-list']); 
// // location.reload();
//       })
//     }
  
  
   
   goBack(){
    console.log("back to teams!");
    this.router.navigate(["/dashboard/dashboard/teams-list"]);
  }
 
  onLoadedActionBar() {
    if (isAndroid) {
      const androidToolbar = this.page.actionBar.nativeView;
      const backButton = androidToolbar.getNavigationIcon();
      if (backButton) {
        backButton.setColorFilter(
          android.graphics.Color.parseColor('#171717'),
          (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
        );
       }
     }
   }
  
 }
