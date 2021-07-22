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
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css'],
})
export class LeadComponent implements OnInit {
  lead: any;
  updatestatus!: FormGroup;
  uploadForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private leadService: LeadService,
    private router: Router,
    private titleService: Title,
    private sharedService: SharedService,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params.id);
      const id = params.id;
      this.leadService.getLead(id).subscribe((response) => {
        console.log(response);
        this.lead = response['data'];
        console.log(this.lead);
        this.titleService.setTitle(
          this.lead[0].Name + this.sharedService.blogTitle
        );
      });
    });
    this.updatestatus = new FormGroup({
      id:new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required])
    })
  }

  

  updateStatus() {
    
    //this.updatestatus.value.id=id;
    console.log(this.updatestatus.value);
    this.leadService
      .updateStatus(this.updatestatus.value)
      .subscribe((result) => {
        console.log(result);
       //  if(result.success){
        //  alert("Successfully Updated the Status")
        // }
        // else{
         //  alert("Error while updating the Status")
        //}
      });
   
  }
}
