import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LeadService } from '../lead.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(
    private leadService: LeadService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }

  loginProcess(){
    
    this.leadService.login(this.formGroup.value).subscribe(result=>{
      if(result.data.match == true){
       //this.toastr.success(result.data.payload.userName, 'Welcome');
     
        this.router.navigate(['/dashboard'], { relativeTo: this.activatedRoute })  
      
      }
     else {
      //this.toastr.error("Please try again", "Invalid credentials");
    }
  })
}

}
