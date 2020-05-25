import { Component, OnInit, Input } from '@angular/core';
import { MuseumService } from '../services/OpenMuseum/openmuseum.service'

import { Museum } from "../models/museum/museum";

@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})

export class SingleMuseumComponent implements OnInit {

  @Input() museums: Museum[];

  constructor(private museumService: MuseumService) { }

  ngOnInit() {

  }

}
