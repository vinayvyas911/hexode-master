import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


import { LeadService } from '../lead.service';

@Component({
  selector: 'app-AddUser',
  templateUrl: './AddUser.component.html',
  styleUrls: ['./AddUser.component.css']
})
export class AddUserComponent implements OnInit {

  User!: FormGroup;

  constructor(
    private leadService: LeadService,
    private formBuilder: FormBuilder,
     private router: Router,
     private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.User = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });
  }
  addUser() {
    this.leadService.addUser(this.User.value).subscribe((result) => {
      console.log(result.success);
      // if(result.success){
      //   this.router.navigate['/login']
      // }
      // else{
      //   alert("error in sign up")
      // }
    });
    this.User.reset();
  }
}
