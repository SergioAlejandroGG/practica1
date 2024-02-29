import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleServiceService {
  var_service = "estoy en mi servicio"
  api_url = 'https://jsonplaceholder.typicode.com/'
  
  constructor(private http: HttpClient){

  }
  obtenerLista(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  onclickbutton(text: string){
    console.log(text)
    this.var_service + text
  }

  
}
