import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadService } from '../lead.service';
import { SharedService } from '../shared.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-AssignLead',
  templateUrl: './AssignLead.component.html',
  styleUrls: ['./AssignLead.component.css']
})
export class AssignLeadComponent implements OnInit {

  lead: any;
  Assign!: FormGroup;
  uploadForm!: FormGroup;
  users: any;
  constructor(
    private route: ActivatedRoute,
    private leadService: LeadService,
    private router: Router,
    private titleService: Title,
    private sharedService: SharedService,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
     
      const id = params.id;
      this.leadService.getLead(id).subscribe((response) => {
      console.log(response['data'][0].Assignedto)
        this.lead = response['data'];
        this.leadService.getUsers().subscribe(
      
          response => {
            
            this.users = response['data'];
           
          },
          (error) => {
            console.log('some error occured');
          }
        );
        this.titleService.setTitle(
          this.lead[0].Name + this.sharedService.blogTitle
        );
      });
    });
    this.Assign = new FormGroup({
      id:new FormControl('', [Validators.required]),
      AssignedTo: new FormControl('', [Validators.required])
    })
  }
  AssignNow() {
    this.leadService
      .Assign(this.Assign.value)
      .subscribe((result) => {
        console.log(result.data.ok);
        // if(result.success){
        //   this.router.navigate['/login']
        // }
        // else{
        //   alert("error in sign up")
        // }
      });
      
  }

}
