import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from "rxjs";
import { LeadService } from '../lead.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser')!);


  constructor(private router: Router,private activatedRoute: ActivatedRoute,
    private leadService: LeadService) { }
  loginStatus$! : Observable<boolean> 
  ngOnInit(): void {
    this.loginStatus$ = this.leadService.isLoggesIn;
  }

  logout(){ 
    this.leadService.logout();
    this.currentUser = "";
    this.router.navigate(['/home'], { relativeTo: this.activatedRoute })        
  }
}
