import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
  raakaaine;
  raakaaineet;
  valittuResepti: Resepti;
  reseptiInput: FormGroup;
  prosenttiInput: FormGroup;
  raakaAinemuokkapainettu: boolean;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private reseptiService: ReseptiService) {

    this.route.params.subscribe(params => {
      this.tuoteid = params.id;
      console.log(this.tuoteid)
    }
    );
  }

  ngOnInit() {
    this.HaeReseptit(this.tuoteid);
    this.raakaAinemuokkapainettu = false;
    this.HaeRaakaaineet();
    this.reseptiInput = this.fb.group({
      tuote: [this.tuoteid, Validators.required],
      raakaaine: ['', Validators.required],
      prosenttisuus: ['', Validators.required]

    });
    this.prosenttiInput = this.fb.group({
      prosenttisuus: ['', Validators.required]
    });


  }

  muokkaaRaakaainepainettu(id, raakaaineid) {
    this.raakaAinemuokkapainettu = true;
    
    this.reseptiService.haeReseptirivi(id).subscribe(
      response => {
        this.valittuResepti = response;
            console.log('raakaaineet', response);
            this.prosenttiInput = this.fb.group({
              prosenttisuus: [this.valittuResepti.prosenttisuus, Validators.required]
            });
      },
      error => {

      }
    )
    console.log(id, raakaaineid);
  }

  tallennaRaakaaineprosenttipainettu() {
    console.log('muahha',this.prosenttiInput.value);
    this.raakaAinemuokkapainettu = false;
    this.valittuResepti.prosenttisuus = this.prosenttiInput.value.prosenttisuus;


    this.reseptiService.muokkaaRaakaainepros(this.valittuResepti).subscribe(
      response => {
        this.HaeReseptit(this.tuoteid);
      },
      error => {

      }
    )
  }

  poistaRaakaainepainettu(id) {
    console.log(id);
    this.reseptiService.poistaRaakaaine(id).subscribe(
      response => {
        this.HaeReseptit(this.tuoteid);
      },
      error => {

      }

    )
  }
  tallennaRaakaaine() {
    this.reseptiService.lisaaRaakaaine(this.reseptiInput.value).subscribe(
      response => {
        console.log(this.reseptiInput);
        this.HaeReseptit(this.tuoteid);
        this.reseptiInput = this.fb.group({
          tuote: [this.tuoteid, Validators.required],
          raakaaine: ['', Validators.required],
          prosenttisuus: ['', Validators.required]
    
        });
      },
      error => {

      }
    );
  }


  HaeRaakaaineet() {
    this.reseptiService.haeRaakaaineet().subscribe(
      response => {
        this.raakaaineet = response
        console.log('raakaaineet', response);
      },
      error => {
        console.log('error', error);
      }
    );
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
