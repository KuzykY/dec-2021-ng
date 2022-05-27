import {Component} from '@angular/core';
import {IUser} from "./interfaces/user.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: IUser

  catch($event: IUser) {
    this.user = $event;
  }
}
