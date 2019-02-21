import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule} from '@angular/forms' //login
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material'; //login
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';  //login
import {MatFormFieldModule} from '@angular/material/form-field'; //login
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { GlobalService} from './service/global.service';
import { ReseptiComponent } from './resepti/resepti.component';
import { ReseptimuokkausComponent } from './reseptimuokkaus/reseptimuokkaus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ReseptiComponent,
    ReseptimuokkausComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatDialogModule
    
  ],
  providers: [
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
