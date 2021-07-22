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
  selector: 'app-LeadAdd',
  templateUrl: './LeadAdd.component.html',
  styleUrls: ['./LeadAdd.component.css'],
})
export class LeadAddComponent implements OnInit {
  formGroup!: FormGroup;
  uploadForm!: FormGroup;

  constructor(
    private leadService: LeadService,
    private formBuilder: FormBuilder,
     private router: Router,
     private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      ShowroomName: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      email1: new FormControl('', [Validators.required]),
      email2: new FormControl('', [Validators.required]),
      add1: new FormControl('', [Validators.required]),
      add2: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      locality: new FormControl('', [Validators.required]),
      landmark: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [Validators.required]),
      MobileNumber: new FormControl('', [Validators.required]),
      AlternateMobileNumber: new FormControl('', [Validators.required]),
      Mobile1: new FormControl('', [Validators.required]),
      mobile2: new FormControl('', [Validators.required]),
      pns_no: new FormControl('', [Validators.required]),
      contact_address: new FormControl('', [Validators.required]),
      ShortSummary: new FormControl('', [Validators.required]),
      Summary: new FormControl('', [Validators.required]),
    });
    this.uploadForm = this.formBuilder.group({
      xlsxFile: [''],
    });
  }

  registerProcess() {
    this.leadService.register(this.formGroup.value).subscribe((result) => {
      console.log(result.success);
      // if(result.success){
      //   this.router.navigate['/login']
      // }
      // else{
      //   alert("error in sign up")
      // }
    });
    this.formGroup.reset();
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('xlsxFile')?.setValue(file);
    }
  }

  uploadfile() {
    const formData = new FormData();
    formData.append('xlsxFile', this.uploadForm.get('xlsxFile')?.value);

    this.leadService.upload(formData).subscribe((result) => {
      console.log(result.success);
       if(result.data){
        alert("success");
       }
       else{
         alert(result);
      }
    });
  }
}
