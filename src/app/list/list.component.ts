import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ListContainers } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpService) { }

  list: any

  ngOnInit() {
    this.http.getContainerList().subscribe(x => {
      console.log(x)
      console.log(x[0].Id.substring(0, 12))
      this.list = x
      console.log(this.list)
    })
  }

}
