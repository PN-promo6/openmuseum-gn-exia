import { Component, OnInit } from '@angular/core';
import {MuseumService} from '../services/openmuseum.service'

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  museumName: string = "Here goes the name";


  constructor(private museumService: MuseumService) { }

  ngOnInit() {
  }

}
