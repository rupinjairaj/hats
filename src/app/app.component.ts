import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ListContainers, StartContainer, StopContainer } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  producerList = new Array<ListContainers>()
  consumerList = new Array<ListContainers>()

  constructor(private _http: HttpService) {

  }

  ngOnInit() {
    this.getContainerList()
  }

  getContainerList() {
    this.consumerList = []
    this.producerList = []
    this._http.getContainerList().subscribe(
      data => {
        data.forEach(x => {
          var producerContainer = x.image.includes("producer")
          var consumerContainer = x.image.includes("consumer")
          if (producerContainer) {
            this.producerList.push(x)
          } else if (consumerContainer) {
            this.consumerList.push(x)
          }
          if (x.state == "running") {
            x.toggle = true
          } else {
            x.toggle = false
          }
        })
      },
      err => console.log(err)
    )
  }

  onContainerStateChange(x: ListContainers) {
    if (x.toggle) {
      console.log("in here")
      var startMsg = new StartContainer()
      startMsg.id = x.id.substring(0, 12)
      startMsg.checkpointId = ""
      startMsg.checkpointDir = ""
      this._http.startContainerByID(startMsg).subscribe(
        data => {
          this.getContainerList()
        },
        err => console.log(err)
      )
    } else {
      var stopMsg = new StopContainer()
      stopMsg.id = x.id.substring(0, 12)
      stopMsg.duration = 0
      this._http.stopContainerByID(stopMsg).subscribe(
        data => {
          this.getContainerList()
        },
        err => console.log(err)
      )
    }
  }
}
