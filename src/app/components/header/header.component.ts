import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() mode = new EventEmitter<boolean>();
  constructor() { }
  setDark = false;
  ngOnInit(): void {
  }
  onChangeToggle() {
    this.setDark = !this.setDark;
    this.mode.emit(this.setDark);
    console.log(this.setDark);
  }
}
