import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from '../models/fournisseur';
import { Materiel } from '../models/materiel';
import { FournisseurService } from '../services/fournisseurService/fournisseur.service';
import { MaterielService } from '../services/materielService/materiel.service';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {

  s_id: number = -1;
  materieaux: any;
  // @ts-ignore
  materiel: Material;
  // @ts-ignore
  materielModifier: Material;
  // @ts-ignore
  fournisseurs: any;

  constructor(private materielService: MaterielService,private fournisseurService: FournisseurService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.materiel = new Materiel();
    this.materielModifier = new Materiel();
    this.materielService.findAll().subscribe(data => {
      this.materieaux = data;
    });
    this.fournisseurService.findAll().subscribe(data => {
      this.fournisseurs = data;
    });
  }

  onSubmit() {
      this.materielService.save(this.materiel).subscribe(result => this.refresh());
  }

  updateMateriel() {
    this.materielService.update(this.materielModifier).subscribe(result => this.refresh());
    this.refresh();
    alert("Etudiant mis à jour")
  }

  refresh() {
    this.materielService.findAll().subscribe(data => {
      this.materieaux = data;
    });
  }

  deleteMateriel(id: number) {
    this.materielService.delete(id).subscribe(data => {
        this.refresh();
      }
    );
    alert("Etudiant Supprimé")
  }

  btnModifier(id :number){
    for(let i=0;i<this.materieaux.length;i++){
      if(this.materieaux[i].id == id){
        this.materielModifier=this.materieaux[i];
      }
    }
  }
}
