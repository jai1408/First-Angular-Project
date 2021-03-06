import { Component } from '@angular/core';

@Component({
  selector : 'app-server',
  templateUrl: './server.component.html',
  styles : [`
    p {
      color : green;
    }
    .online {
      color : white;
    }
    `]
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  constructor(){
    this.serverStatus = Math.random() > 0.6 ? 'online' : 'offline';
  }
}