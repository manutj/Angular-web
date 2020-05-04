import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-pagina-random',
  templateUrl: './pagina-random.component.html',
  styleUrls: ['./pagina-random.component.css']
})
export class PaginaRandomComponent implements OnInit {
  
  public nombre:string

  constructor(private _route:ActivatedRoute,private _router:Router) { 
 
  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      this.nombre=params.nombre;
    });
  }
  redireccion(){
    this._router.navigate(['/pagina-random','Manuel']);
    }
}
