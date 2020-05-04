import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../models/article';
import {Global} from './global';

@Injectable()
export class ArticleService{
    public url:string
constructor(
    private _hhttp:HttpClient
){
this.url=Global.url;
}

pruebas(){
    return 'Soy el servicio de articulos';
}

getArticles():Observable<any>{
    return this._hhttp.get(this.url+'articles')
}
}

