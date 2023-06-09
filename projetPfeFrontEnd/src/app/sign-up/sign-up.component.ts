import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from '../models/departement';
import { User } from '../models/user';
import { DepartementService } from '../services/departementService/departement.service';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  s_id: number = -1;
  users: any;
  idDept : number = 0;
  departements: any;
  // @ts-ignore
  user: User;
  validation:boolean=false;

  constructor(private userService: UserService,private departementService: DepartementService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.user = new User();
    this.user.departement = new Departement();
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    this.departementService.findAll().subscribe(data => {
      this.departements = data;
    });
  }

  onSubmit(registerForm : NgForm) {
    if(this.user.nom != null ){
      this.userService.save(this.user).subscribe(result => this.refresh());
    }else{
      console.log("error");
    }
  }

  updateDepartement(id : number) {
    // this.router.navigate(["departement", this.s_id])
    this.user.id=id;
    this.userService.update(this.user).subscribe(result => this.refresh());
  }

  refresh() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  deleteDepartement(id: number) {
    this.userService.delete(id).subscribe(data => {
        // console.log(data);
        this.refresh();
      }
    );
  }
}
