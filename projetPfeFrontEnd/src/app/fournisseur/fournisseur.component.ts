import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from '../models/fournisseur';
import { FournisseurService } from '../services/fournisseurService/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  s_id: number = -1;
  fournisseurs: any;
  // @ts-ignore
  fournisseur: Fournisseur;
  // @ts-ignore
  fournisseurModifier: Fournisseur;

  constructor(private fournisseurService: FournisseurService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.fournisseur = new Fournisseur();
    this.fournisseurModifier = new Fournisseur();
    this.fournisseurService.findAll().subscribe(data => {
      this.fournisseurs = data;
    });
  }

  onSubmit() {
      this.fournisseurService.save(this.fournisseur).subscribe(result => this.refresh());
  }

  updateFournisseur() {
    this.fournisseurService.update(this.fournisseurModifier).subscribe(result => this.refresh());
    alert("Fournisseur mis à jour")
  }

  refresh() {
    this.fournisseurService.findAll().subscribe(data => {
      this.fournisseurs = data;
    });
  }

  deleteFournisseur(id: number) {
    this.fournisseurService.delete(id).subscribe(data => {
        console.log(data);
        this.refresh();
      }
    );
    alert("Fournisseur Supprimé")
  }

  btnModifier(id :number){
    for(let i=0;i<this.fournisseurs.length;i++){
      if(this.fournisseurs[i].id == id){
        this.fournisseurModifier=this.fournisseurs[i];
      }
    }
  }
}
