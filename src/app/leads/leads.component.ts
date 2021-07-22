import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LeadService } from '../lead.service';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css'],
})
export class LeadsComponent implements OnInit {
  leads: any;
  title = 'Blogs';
  currentUser = JSON.parse(localStorage.getItem('currentUser')!);

  constructor(
    private leadService: LeadService,
    private titleService: Title,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title + this.sharedService.blogTitle);
    this.getLeads();
  }

  getLeads(): void {
    this.leadService.getLeads().subscribe(
      
      response => {
        console.log(this.currentUser);
        this.leads = response['data'];
        console.log(this.leads);
      },
      (error) => {
        console.log('some error occured');
      }
    );
  }
}
