import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Departement } from '../models/departement';
import { DepartementService } from '../services/departementService/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})

export class DepartementComponent implements OnInit {

  s_id: number = -1;
  departements: any;
  // @ts-ignore
  departement: Departement;
  // @ts-ignore
  departementModifier: Departement;

  constructor(private departementService: DepartementService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.departement = new Departement();
    this.departementModifier = new Departement();
    this.departementService.findAll().subscribe(data => {
      this.departements = data;
    });
  }

  onSubmit() {
      this.departementService.save(this.departement).subscribe(result => this.refresh());
  }

  updateDepartement() {
    this.departementService.update(this.departementModifier).subscribe(result => this.refresh());
    alert("Departement mis à jour")
  }

  refresh() {
    this.departementService.findAll().subscribe(data => {
      this.departements = data;
    });
  }

  deleteDepartement(id: number) {
    this.departementService.delete(id).subscribe(data => {
        console.log(data);
        this.refresh();
      }
    );
    alert("Departement Supprimé")
  }

  btnModifier(id :number){
    for(let i=0;i<this.departements.length;i++){
      if(this.departements[i].id == id){
        this.departementModifier=this.departements[i];
      }
    }
  }
}
