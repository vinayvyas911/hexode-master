import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LeadService } from './lead.service';


@Injectable({
  providedIn: 'root'
})
export class ActivateAdminGuard implements CanActivate {
  constructor(public LeadService: LeadService,private router: Router) { }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  //   return true;
  // }
  canActivate(): boolean {
    if (!this.LeadService.isAdmin()) {
      this.router.navigate(['leads']);
      return false;
  }
  return true;
}
}
