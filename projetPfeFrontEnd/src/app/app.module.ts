import { NgModule} from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { DepartementComponent } from './departement/departement.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { MaterielComponent } from './materiel/materiel.component';
import { CommandeComponent } from './commande/commande.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ContacterNousComponent } from './contacter-nous/contacter-nous.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { DepartementService } from './services/departementService/departement.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from './services/userService/user.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    DepartementComponent,
    FournisseurComponent,
    MaterielComponent,
    CommandeComponent,
    ReclamationComponent,
    ContacterNousComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatDatepickerModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    DepartementService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
