import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Usuario{
  nomUsuario: string;
  apellidoUsuario: string;
  telefonoUsuario: number;
  correoUsuario: string;
  categoriaUsuario: string;
  passUsuario: string;
  repassUsuario:string;
}

const USERS_KEY ='my-usuarios';


@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {

  
  constructor(private storage: Storage) { 
    this.init();
  }


  //creamos el almacen de key,value
  async init(){
    const storage = await this.storage.create();
  }

  //crear un nuevo usuario en el storage
  async addUsuario(dato: Usuario):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos: Usuario[])=>{
      if (datos){
          datos.push(dato);
          return this.storage.set(USERS_KEY, datos);
      }
      else{
        return this.storage.set(USERS_KEY, [dato]);
      }
     })
  }//fin del método add

  //obtener los usuarios del storage
  async getUsuarios():Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }


}
