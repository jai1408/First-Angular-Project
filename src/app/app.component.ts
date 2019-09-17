import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretText='tuna';
  isShowing=false;
  log = [];

  doToggle(){
    this.isShowing = !this.isShowing;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  getColor(){
    if(this.log.length>4)
    return 'blue';
  }
}
