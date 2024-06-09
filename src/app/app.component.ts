// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'my-angular-app';
//   City="Delhi";
//   show=false;
//   movies=["siis","ravi","sai"]
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideNav = false;

  toggleNav() {
    this.hideNav = !this.hideNav;
  }
}