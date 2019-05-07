import { Component, OnInit } from '@angular/core';
import { ApisService } from '~/app/shared/services/apis.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
teamdata:any;
total:any=0;
  constructor(private myService:ApisService) { }

  ngOnInit() {
  this.myService.getTeams().subscribe(res=>{
    this.teamdata = res.data;
  //  console.log(this.teamdata.amount);
  console.log(this.teamdata.length);
    for(let i=0;i<this.teamdata.length;i++){
      this.total += this.teamdata[i].amount;
    }
  
  })
}

}
