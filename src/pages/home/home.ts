import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";
import 'slick-carousel/slick/slick';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    $('.myCarousel').slick({
      dots: false,
      centerMode: true,
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 1,
      initialSlide: 1
    });
}
}
