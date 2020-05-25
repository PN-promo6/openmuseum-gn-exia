import { Component, OnInit, Input } from '@angular/core';
import { MuseumService } from '../services/OpenMuseum/openmuseum.service';
import { DataService } from "../services/DataService/data.service";

import { Museum } from "../models/museum/museum";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'openmuseum';
  constructor(private dataService: DataService) { }

  public museums: Museum[];

  ngOnInit() {
    this.dataService.fetchMuseums()
      .subscribe(
        res => {
          // console.log(res);
          this.museums = res;
        },
        error => {
          console.log(error);

        }
      );

  }

};
