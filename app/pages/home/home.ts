import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {DeviceOrientation} from "ionic-native";

declare var navigator;

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private platform: Platform) {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      // console.log(navigator);
      console.log("Device is rdy");
    }

  }

  refresh(){
    window.location.reload();
  }


  devicerdy(){
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  }


}
