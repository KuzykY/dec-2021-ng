import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class MainLayoutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
