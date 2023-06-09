import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  idUser= sessionStorage.getItem('idUser');
  roleUser = sessionStorage.getItem('role');

  visibilite:boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('idUser')!=null){
      this.visibilite=true;
    }

  }

  // session(){
  //   if(this.idUser != null){
  //     this.visibilite=true;
  //   }
  // }

  clearSession(){
    sessionStorage.clear()
    this.visibilite = false
    this.router.navigate(["signIn"])
    this.ngOnInit()
  }

}
