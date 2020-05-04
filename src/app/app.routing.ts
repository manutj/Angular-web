//Importar los modulos del router de Angular

import {ModuleWithProviders, Component} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'

//Importar componentes a los cuales quiero hacer una pagina exclusiva
import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {FormularioComponent} from './components/formulario/formulario.component';
import {PeliculasComponent} from './components/peliculas/peliculas.component';
import {PaginaRandomComponent} from './components/pagina-random/pagina-random.component';
import{ErrorComponent} from './components/error/error.component';


//Array de rutas
const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'blog',component:BlogComponent},
    {path:'formulario',component:FormularioComponent},
    {path:'peliculas',component:PeliculasComponent},
    {path:'pagina-random',component:PaginaRandomComponent},
    {path:'pagina-random/:nombre',component:PaginaRandomComponent},
    {path:'**',component:ErrorComponent}
];

//exportar el modulo de rutas
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes)