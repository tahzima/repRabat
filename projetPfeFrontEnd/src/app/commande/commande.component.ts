import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielService } from '../services/materielService/materiel.service';
import { UserService } from '../services/userService/user.service';

interface userStruct{
  id:number;
  nom:string;
  prenom:string;
  address:string;
  role:string;
}

interface materileStruct{
  id:number;
  marque:string;
  nom:string;
  num_serie:string;
  prix:number;
}

interface commandeStruct{
  id:number;
  date_commande:string;
  numeroCommande:String;
  prixTT:number;
  qte:number;
  user:userStruct;
  materiel:materileStruct;
}

let listMateriel:materileStruct[]=[
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

let listUser:userStruct[]=[
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

let listCommande:commandeStruct[]=[
  {
    id:1,
    date_commande:"2022-06-28",
    numeroCommande:"cmd202206",
    prixTT:1000,
    qte:2,
    user:listUser[0],
    materiel:listMateriel[1],
  },
  {
    id:2,
    date_commande:"2022-06-30",
    numeroCommande:"cmd202207",
    prixTT:2100,
    qte:3,
    user:listUser[1],
    materiel:listMateriel[2],
  }
]

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {


  idAddMateriel:number=0;
  idAddEmployer:number=0;
  dateCommande:string="";
  numeroCommande:string="";
  prixTT:number=0;
  qte:number=0;

  RecArr;
  userPassage:userStruct;
  materielPassage:materileStruct;
  commandePassage:commandeStruct;
  materiels:any;
  users:any;

  constructor(private materielService: MaterielService,private userService: UserService,private route: ActivatedRoute, private router: Router) {

    this.RecArr=listCommande;
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
    this.commandePassage={
      id:1,
      date_commande:"2022-06-28",
      numeroCommande:"cmd202206",
      prixTT:1000,
      qte:2,
      user:this.userPassage,
      materiel:this.materielPassage,
    }

  }

  ngOnInit(): void {
    this.materielService.findAll().subscribe(data => {
      this.materiels = data;
    });
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  onSubmit() {

    // console.log(this.idAddMateriel+"/"+this.idAddMateriel+"/"+this.dateCommande+"/"+this.numeroCommande+"/"+this.prixTT+"/"+this.qte)

    for(let i=0;i<this.materiels.length;i++){
      if(this.materiels[i].id==this.idAddMateriel){
        this.materielPassage.id=this.materiels[i].id;
        this.materielPassage.nom=this.materiels[i].nom;
        this.materielPassage.marque=this.materiels[i].marque;
        this.materielPassage.num_serie=this.materiels[i].numeroSerie;
        this.materielPassage.prix=this.materiels[i].prix;
      }
    }
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].id==this.idAddEmployer){
        this.userPassage.id=this.users[i].id;
        this.userPassage.nom=this.users[i].nom;
        this.userPassage.prenom=this.users[i].prenom;
        this.userPassage.address=this.users[i].address;
        this.userPassage.role=this.users[i].role;
      }
    }
    this.commandePassage.id=listCommande.length+1;
    this.commandePassage.date_commande=this.dateCommande;
    this.commandePassage.numeroCommande=this.numeroCommande;
    this.commandePassage.prixTT=this.prixTT;
    this.commandePassage.qte=this.qte;
    this.commandePassage.user=this.userPassage;
    this.commandePassage.materiel=this.materielPassage;

    listCommande.push(this.commandePassage)

  }

  updateReclamation() {
    // for(let i=0;i<this.materiels.length;i++){
    //   if(this.materiels[i].id==this.materiel){
    //     this.materielPassage.id=this.materiels[i].id;
    //     this.materielPassage.nom=this.materiels[i].nom;
    //     this.materielPassage.marque=this.materiels[i].marque;
    //     this.materielPassage.num_serie=this.materiels[i].numeroSerie;
    //     this.materielPassage.prix=this.materiels[i].prix;
    //   }
    // }
    // for(let i=0;i<this.users.length;i++){
    //   if(this.users[i].id==this.emplJS){
    //     this.userPassage.id=this.users[i].id;
    //     this.userPassage.nom=this.users[i].nom;
    //     this.userPassage.prenom=this.users[i].prenom;
    //     this.userPassage.address=this.users[i].address;
    //     this.userPassage.role=this.users[i].role;
    //   }
    // }
    // this.reclamationPassage.id=reclamationRempl.length+1;
    // this.reclamationPassage.date_reclamation=this.dateReclamation;
    // this.reclamationPassage.date_reparation=this.dateReparation;
    // this.reclamationPassage.status="Encours";
    // this.reclamationPassage.description=this.description;
    // this.reclamationPassage.user=this.userPassage;
    // this.reclamationPassage.materiel=this.materielPassage;

    // reclamationRempl.push(this.reclamationPassage)

    // alert("Reclamation mis à jour")
  }

  refresh() {
  }

  deleteCommande(id: number) {
    listCommande.splice(id-1,1)
    alert("Commande Supprimé")
  }

  btnModifier(id :number){
    // this.idMP=id;
  }

}
