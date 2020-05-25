import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MuseumService } from '../services/OpenMuseum/openmuseum.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  museumRef: string;
  name: string;
  opening: string;
  adress: string;
  city: string;
  fax: string;
  website: string;
  reference: string;
  telephone: string;
  closing: string;
  zip: string;
  date: string;
  dep: string;

  constructor(private museumService: MuseumService, private route: ActivatedRoute) { }

  ngOnInit() {
    const museumRef = this.route.snapshot.params['museumRef'];
    this.name = this.museumService.getMuseumByRefMusee(museumRef).name;
    this.opening = this.museumService.getMuseumByRefMusee(museumRef).opening;
    this.adress = this.museumService.getMuseumByRefMusee(museumRef).adress;
    this.city = this.museumService.getMuseumByRefMusee(museumRef).city;
    this.fax = this.museumService.getMuseumByRefMusee(museumRef).fax;
    this.website = this.museumService.getMuseumByRefMusee(museumRef).website;
    this.reference = this.museumService.getMuseumByRefMusee(museumRef).reference;
    this.telephone = this.museumService.getMuseumByRefMusee(museumRef).telephone;
    this.closing = this.museumService.getMuseumByRefMusee(museumRef).closing;
    this.zip = this.museumService.getMuseumByRefMusee(museumRef).zip;
    this.date = this.museumService.getMuseumByRefMusee(museumRef).date;
    this.dep = this.museumService.getMuseumByRefMusee(museumRef).dep;

  }

}
