import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IngresadoprofesorGuard implements CanActivate {
  constructor(private navcontroller: NavController){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if (localStorage.getItem('ingresado2')){
        return true;
      }
      else{
        this.navcontroller.navigateRoot('sesionprofesor');
      }
    return true;
  }
  
}
