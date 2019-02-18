import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: '[app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
 
  constructor( private router: Router, private fb: FormBuilder) { }

  loginForm: FormGroup;

  loginUser(e){
  e.preventDefault();
  var username = e.target.elements[0].value;
  var password = e.target.elements[1].value;
  if(username == 'admin' && password == 'admin'){
  this.router.navigate(['news']);
  }

  }

  ngOnInit() {

    this.loginForm = this.fb.group({
      firstName: ['',[ Validators.required, Validators.min(3), Validators.maxLength(10)]],
      logPwd: ['', Validators.required],
    });
    
    

  }

}
