import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse,HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  
})
export class Component1Component implements OnInit {
  @Output() register: EventEmitter<object> = new EventEmitter<object>()
  @Input() token;
  username:any
  email:any
  password:any
  str:any
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  auth() {
    //console.log(this);
this.str =  {
  user_login: this.username,
  user_password: this.password,
  user_email:this.email
}
// var config = {
//   headers: new HttpHeaders({
//   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//   })
// var body = new HttpParams()
// .set('user_login',this.username)
// .set('user_password', this.password)
// .set('user_email', this.email)

// console.log(this.str );
    this.http.post('http://localhost/wpclass/wp-json/angular/v1/reg',  JSON.stringify(this.str), {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
}).subscribe( (val) => {
  console.log("POST call successful value returned in body",val);
},
response => {
  console.log(response);
},
() => {
  //console.log("The POST observable is now completed.");
});


// this.http.post('http://localhost/wpclass/wp-json/angular/v1/reg', JSON.stringify(this.str))
// .subscribe( (val) => {
//   console.log(val);
// },
// response => {
//   console.log(response);
// },
// () => {
//   //console.log("The POST observable is now completed.");
// });
  }

}
