import {Injectable} from '@angular/core';
import {Pelicula} from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas:Pelicula[];

    constructor(){
        this.peliculas=[
            new Pelicula('Spiderman',2002,'https://wipy.tv/wp-content/uploads/2020/02/Spider-Man-lanzaba-telaran%CC%83as-orga%CC%81nicas.jpg'),
            new Pelicula('Los vengadores Endgame',2019,'https://as.com/tikitakas/imagenes/2019/04/26/portada/1556258369_131914_1556258703_noticia_normal.jpg'),
            new Pelicula('Batman vs Superman',2018,'https://miro.medium.com/max/3000/1*Q-mdzw2mspSQwxtDWtZAeA.jpeg')
        ];
    }

    holaMundo(){
        return 'Hola desde un servicio de Angular';
    }

    getPeliculas(){
        return this.peliculas;
    }
}