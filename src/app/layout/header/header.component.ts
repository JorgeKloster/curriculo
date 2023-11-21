import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private router: Router){}

  goToCurriculo(){
    this.router.navigate(['/curriculo']);
  }

  goToExperiencias(){
    this.router.navigate(['/experiencias']);
  }

  goToHabilidades(){
    this.router.navigate(['/habilidades']);
  }

  goToContato(){
    this.router.navigate(['/contato']);
  }

}
