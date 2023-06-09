import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  s_id: number = -1;
  idUserAuth:string="";
  users: any;
  // @ts-ignore
  user: User;
  // validation:boolean=false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.user = new User();
    // this.userService.findAll().subscribe(data => {
    //   this.users = data;
    // });
  }

  public setSessions(){
    sessionStorage.setItem('idUser',''+this.user.id)
    sessionStorage.setItem('role',''+this.user.role)
  }

  public getSessionId(){
    return sessionStorage.getItem('idUser')
  }

  public getSessionRole(){
    return sessionStorage.getItem('role')
  }

  onSubmit() {
    this.userService.auth(this.user.email,this.user.password).subscribe(data => {
      this.user = data;
      this.setSessions();
    });

    if(this.user!=null){
      this.router.navigate([""])
    }else{
      alert("Error de l'authentification")
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
