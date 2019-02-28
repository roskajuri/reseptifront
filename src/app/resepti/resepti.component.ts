import { Component, OnInit } from '@angular/core';
import { Resepti } from '../models/resepti';
import { Router } from '@angular/router';
import { ReseptiService } from '../service/resepti.service';

@Component({
  selector: 'app-resepti',
  templateUrl: './resepti.component.html',
  styleUrls: ['./resepti.component.css']
})
export class ReseptiComponent implements OnInit {
  reseptit;
  tuotteet;
  valittuTuote;
  constructor(private reseptiService: ReseptiService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') && localStorage.getItem('account')) {
      this.HaeTuotteet();
    } else {
      this.router.navigate(['/login']);
    }
   
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
  HaeTuotteet() {
    this.reseptiService.haeTuotteet().subscribe(
      response => {
        this.tuotteet = response
        console.log('tuotteet', response);
      },
      error => {
        console.log('error', error);
      }
    );
  }
  tuoteClickki(tuote) {
    this.valittuTuote = tuote;
    console.log(this.valittuTuote.tuoteid);
    this.HaeReseptit(this.valittuTuote.tuoteid)
  }

}
