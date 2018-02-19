import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { ListContainers, StartContainer, StopContainer } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _http: HttpService) { }

  @Input() list: ListContainers[]
  @Output() onContainerStateChangeEvent:EventEmitter<ListContainers> = new EventEmitter<ListContainers>()

  ngOnInit() {
    // this.getContainerList()
  }

  onContainerStateChange(x: ListContainers) {
    this.list.forEach(element => {
      if(element.id == x.id) {
        element.toggle = !element.toggle
      }
    });
    this.onContainerStateChangeEvent.emit(x)
  }

}
