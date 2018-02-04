import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ListContainers, StartContainer, StopContainer } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _http: HttpService) { }

  list: ListContainers[]

  ngOnInit() {
    this.getContainerList()
  }

  getContainerList() {
    this._http.getContainerList().subscribe(
      data => {
        this.list = data;
        this.list.forEach(x => {
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
    x.toggle = !x.toggle
    if (x.toggle) {
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
