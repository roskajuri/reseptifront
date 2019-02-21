import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Resepti } from '../models/resepti';

import { ReseptiService } from '../service/resepti.service';

@Component({
  selector: 'app-reseptimuokkaus',
  templateUrl: './reseptimuokkaus.component.html',
  styleUrls: ['./reseptimuokkaus.component.css']
})
export class ReseptimuokkausComponent implements OnInit {
  reseptit;
  tuoteid;
  constructor(private route: ActivatedRoute, private reseptiService: ReseptiService) {

    this.route.params.subscribe(params => {
      this.tuoteid = params.id;
      console.log(this.tuoteid)
    }
    );
  }

  ngOnInit() {
    this.HaeReseptit(this.tuoteid);
  }

  HaeReseptit(tuoteid) {
    this.reseptiService.haeReseptit(tuoteid).subscribe(
      response => {
        this.reseptit = response
        console.log('reseptit', response);
      },
      error => {
        console.log('error', error);
      }
    );
  }

}
