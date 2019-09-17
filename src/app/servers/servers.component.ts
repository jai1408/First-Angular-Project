import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  
  isButtonEnable = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  isServerCreated=false;
  servers =['TestServer', 'TestServer2'];
  

  onServerCreation(){
    this.isServerCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created ! server name is'+ this.serverName;
  }

  onUpdateServer(event : Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  constructor() { 
    setTimeout(() => {
      this.isButtonEnable=true;
    }, 2000);
  }

  ngOnInit() {
  }

}
