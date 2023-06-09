import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande/commande.component';
import { ContacterNousComponent } from './contacter-nous/contacter-nous.component';
import { DepartementComponent } from './departement/departement.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import {HomeComponent} from './home/home.component';
import { MaterielComponent } from './materiel/materiel.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'departement', component:DepartementComponent},
  {path:'fournisseur', component:FournisseurComponent},
  {path:'materiel', component:MaterielComponent},
  {path:'commande', component:CommandeComponent},
  {path:'reclamation', component:ReclamationComponent},
  {path:'contacter-nous', component:ContacterNousComponent},
  {path:'signIn', component:SignInComponent},
  {path:'signUp', component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
