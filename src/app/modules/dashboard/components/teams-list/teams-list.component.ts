import { Component, OnInit } from '@angular/core';
import { isAndroid } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Team } from './team';
import { ApisService } from '../../../../shared/services/apis.service';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { View } from 'tns-core-modules/ui/core/view';
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { disableDebugTools } from '@angular/platform-browser';
//import { RadListViewComponent } from "nativescript-ui-listview/angular"

declare var android: any;

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  teamList: any;
  id: any;
  team_id: any;
  teamdata: any;
  team_name:any;
  constructor(private page: Page, private router: Router, private myService: ApisService) { }

  selectedTeam: Team;

  onSelect(t: Team) {
    this.selectedTeam = t;
    this.router.navigate(['/dashboard/teams-list', t.team_id]);
    // console.log(this.selectedTeam.team_id);
  }

  ngOnInit() {
    
    this.myService.getTeams().subscribe(response => {
      this.teamList = response.data;
    })

  }

  getTeams(){
    this.myService.getTeams().subscribe(response => {
      this.teamList = response.data;
    })

  }
  public onPullToRefreshInitiated(args: any) {

    console.log("refreshed!");
    this.getTeams();
    var radListView = args.object;
    setTimeout(() => {
    radListView.notifyPullToRefreshFinished();
    }, 500);
  }
  public onCellSwiping(args: ListViewEventData) {
    const swipeLimits = args.data.swipeLimits;
    const currentItemView = args.object;
    this.id = this.teamList.indexOf(args.object.bindingContext)
    if (args.data.x < -200) {
      console.log("Notify perform right action");
    }
  }


  public onSwipeCellStarted(args: ListViewEventData) {
    const swipeLimits = args.data.swipeLimits;
    const swipeView = args['object'];
    const rightItem = swipeView.getViewById<View>('delete-view');
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
  }

  public onSwipeCellFinished(args: ListViewEventData) { }

  public onRightSwipeClick(args) {
    console.log("hi");
    this.id = this.teamList.indexOf(args.object.bindingContext)
    console.log(this.id);
    let data = {
      team_id: this.teamList[this.id].team_id
    }

    dialogs.confirm({
      title: "Delete Team",
      message: "Do you want to delete team",
      okButtonText: "OK",
      cancelButtonText: "CANCEL",
    }).then((result) => {
      if (result) {
        console.log("in delete");
        this.myService.deleteTeam(data).subscribe(response => {
          console.log("response for delete = " + response.message);
          if (response && response.status == 200) {
            console.log("item deleted");
          }
          else { console.log("item not deleted"); }
        });
      }
        else if (!result) {
        console.log("you clicked on cancel button");
      }
    });
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



  // editRecord(){
  //   this.router.navigate(["/private/editRecord"]);
  // }

  // deleteRecord(){
  //   this.router.navigate(['/private/deleteRecord']);
  // }


}


