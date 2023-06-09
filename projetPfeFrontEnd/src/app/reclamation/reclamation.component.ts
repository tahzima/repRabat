import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from '../models/reclamation';
import { User } from '../models/user';
import { MaterielService } from '../services/materielService/materiel.service';
import { ReclamationService } from '../services/reclamationService/reclamation.service';
import { UserService } from '../services/userService/user.service';

interface userNew{
  id:number;
  nom:string;
  prenom:string;
  address:string;
  role:string;
}

interface materileNew{
  id:number;
  marque:string;
  nom:string;
  num_serie:string;
  prix:number;
}

interface reclamationNew{
  id:number;
  date_reclamation:string;
  date_reparation:String;
  status:string;
  description:string;
  user:userNew;
  materiel:materileNew;
}

let matRempl:materileNew[]=[
  {
    id:1,
    marque:"hp",
    nom:"clavier",
    num_serie:"12E21D1",
    prix:900
  },
  {
    id:2,
    marque:"hp",
    nom:"sourie",
    num_serie:"A12442",
    prix:500
  },
  {
    id:5,
    marque:"dell",
    nom:"clavier",
    num_serie:"EUZE3242",
    prix:700
  }
]

let userRempl:userNew[]=[
  {
    id:1,
    nom:"tahzima",
    prenom:"ilyass",
    address:"matar",
    role:"admin",
  },
  {
    id:2,
    nom:"chantaf",
    prenom:"badr",
    address:"matar",
    role:"employer",
  },
  {
    id:3,
    nom:"TAHZIMAA",
    prenom:"ilyasss",
    address:"marakech",
    role:"employer",
  }
]

let reclamationRempl:reclamationNew[]=[
  {
    id:1,
    date_reclamation:"2022-05-19",
    date_reparation:"2022-06-19",
    status:"Encours",
    description:"panne de sercuit",
    user:userRempl[0],
    materiel:matRempl[1],
  },
  {
    id:2,
    date_reclamation:"2022-05-26",
    date_reparation:"2022-06-30",
    status:"Encours",
    description:"panne de cable",
    user:userRempl[1],
    materiel:matRempl[0],
  },
  {
    id:3,
    date_reclamation:"2022-05-26",
    date_reparation:"2022-06-20",
    status:"Encours",
    description:"panne de cable",
    user:userRempl[0],
    materiel:matRempl[2],
  }
]

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  s_id: number = -1;
  reclamations: any;
  // @ts-ignore
  reclamation: Reclamation;
  // @ts-ignore
  // reclamationModifier: Reclamation;
  materiels:any;
  users:any;
  // obj: any={id:1,nom:'reclamation'};
  reclamationJS:any;
  reclamationJsN:any;
  materiel:any;
  dateReclamation:any;
  dateReparation:any;
  description:any;
  emplJS:any;
  status:any;
  idMP:number=-1;

  reclModifier;
  RecArr;
  userPassage:userNew;
  materielPassage:materileNew;
  reclamationPassage:reclamationNew;

  selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
	}

  constructor(private reclamationService: ReclamationService,private materielService: MaterielService,private userService: UserService,private route: ActivatedRoute, private router: Router) {
  //   this.reclamationJS=[{
  //     "id":1,
  //     "date_reclamation":"2022-05-23",
  //     "date_reparation":"2022-06-24",
  //     "description_panne":"panne de cable",
  //     "status":"Encours",
  //     "user":{
  //        "id":2,
  //        "nom":"chantaf",
  //        "prenom":"badr",
  //        "role":"employer"
  //     },
  //     "materiel":{
  //        "id":3,
  //        "marque":"dell",
  //        "nom":"clavier",
  //        "numero_serie":"EUZE3242",
  //        "prix":"700"
  //     }
  //  },
  //  {
  //     "id":2,
  //     "date_reclamation":"2022-04-30",
  //     "date_reparation":"2022-07-14",
  //     "description_panne":"panne de cable",
  //     "status":"Encours",
  //     "user":{
  //        "id":3,
  //        "nom":"TAHZIMAA",
  //        "prenom":"ilyasss",
  //        "role":"employer"
  //     },
  //     "materiel":{
  //        "id":1,
  //        "marque":"hp",
  //        "nom":"sourie",
  //        "numero_serie":"A12442",
  //        "prix":"500"
  //     }
  //  }
  // ]
  this.RecArr=reclamationRempl;
  this.reclModifier=reclamationRempl[this.idMP]
  this.userPassage={
    id:1,
    nom:"tahzima",
    prenom:"ilyass",
    address:"matar",
    role:"admin",
  };
  this.materielPassage={
    id:1,
    marque:"hp",
    nom:"clavier",
    num_serie:"12E21D1",
    prix:900
  }
  this.reclamationPassage={
    id:1,
    date_reclamation:"2022-05-19",
    date_reparation:"2022-06-19",
    status:"Encours",
    description:"panne de sercuit",
    user:this.userPassage,
    materiel:this.materielPassage,
  }
  }


  ngOnInit(): void {
    // this.reclamation = new Reclamation();
    // this.reclamation.user = new User();
    // this.reclamationModifier = new Reclamation();

    // this.reclamationService.findAll().subscribe(data => {
    //   this.reclamations = data;
    // });
    this.materielService.findAll().subscribe(data => {
      this.materiels = data;
    });
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  saveData(registerForm : NgForm){
    console.log("valeurs : ", JSON.stringify(registerForm.value))
  }

  onSubmit() {
    // this.reclamation.status="Encours"
    // console.log(this.reclamation.user.id)
    // this.reclamationService.save(this.reclamation).subscribe(result => this.refresh());
    // console.log(this.selectedTeam)

    // this.dateRe=document.getElementsByName("dateReclamtion");
    // console.log(this.dateRe.value)




    // console.log(reclamationRempl[i])
    // console.log(reclamationRempl)
    for(let i=0;i<this.materiels.length;i++){
      if(this.materiels[i].id==this.materiel){
        this.materielPassage.id=this.materiels[i].id;
        this.materielPassage.nom=this.materiels[i].nom;
        this.materielPassage.marque=this.materiels[i].marque;
        this.materielPassage.num_serie=this.materiels[i].numeroSerie;
        this.materielPassage.prix=this.materiels[i].prix;
      }
    }
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].id==this.emplJS){
        this.userPassage.id=this.users[i].id;
        this.userPassage.nom=this.users[i].nom;
        this.userPassage.prenom=this.users[i].prenom;
        this.userPassage.address=this.users[i].address;
        this.userPassage.role=this.users[i].role;
      }
    }
    this.reclamationPassage.id=reclamationRempl.length+1;
    this.reclamationPassage.date_reclamation=this.dateReclamation;
    this.reclamationPassage.date_reparation=this.dateReparation;
    this.reclamationPassage.status="Encours";
    this.reclamationPassage.description=this.description;
    this.reclamationPassage.user=this.userPassage;
    this.reclamationPassage.materiel=this.materielPassage;

    reclamationRempl.push(this.reclamationPassage)

  }

  updateReclamation() {
    // this.reclamationService.update(this.reclamationModifier).subscribe(result => this.refresh());

    for(let i=0;i<this.materiels.length;i++){
      if(this.materiels[i].id==this.materiel){
        this.materielPassage.id=this.materiels[i].id;
        this.materielPassage.nom=this.materiels[i].nom;
        this.materielPassage.marque=this.materiels[i].marque;
        this.materielPassage.num_serie=this.materiels[i].numeroSerie;
        this.materielPassage.prix=this.materiels[i].prix;
      }
    }
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].id==this.emplJS){
        this.userPassage.id=this.users[i].id;
        this.userPassage.nom=this.users[i].nom;
        this.userPassage.prenom=this.users[i].prenom;
        this.userPassage.address=this.users[i].address;
        this.userPassage.role=this.users[i].role;
      }
    }
    this.reclamationPassage.id=reclamationRempl.length+1;
    this.reclamationPassage.date_reclamation=this.dateReclamation;
    this.reclamationPassage.date_reparation=this.dateReparation;
    this.reclamationPassage.status="Encours";
    this.reclamationPassage.description=this.description;
    this.reclamationPassage.user=this.userPassage;
    this.reclamationPassage.materiel=this.materielPassage;

    reclamationRempl.push(this.reclamationPassage)

    alert("Reclamation mis à jour")
  }

  refresh() {
    // this.reclamationService.findAll().subscribe(data => {
    //   this.reclamations = data;
    // });
    // this.materielService.findAll().subscribe(data => {
    //   this.materiels = data;
    // });
    // this.userService.findAll().subscribe(data => {
    //   this.users = data;
    // });
  }

  deleteReclamation(id: number) {
    // this.reclamationService.delete(id).subscribe(data => {
    //     console.log(data);
    //     this.refresh();
    //   }
    // );
    reclamationRempl.splice(id-1,1)
    alert("Reclamation Supprimé")
  }

  btnModifier(id :number){
    // for(let i=0;i<this.reclamations.length;i++){
    //   if(this.reclamations[i].id == id){
    //     this.reclamationModifier=this.reclamations[i];
    //   }
    // }
    this.idMP=id;
  }
}
