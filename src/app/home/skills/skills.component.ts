import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { NgModel } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

interface student{
  fname:string,
  lname:string,
  email:string,
  phone:string,
  pass:string,
  cpass:string
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  //this http is like a variable that we can access 
  constructor(public http:ApiService,public r:Router){

  }
 public students:student={
  fname:"",
  lname:"",
  email:"",
  phone:"",
  pass:"",
  cpass:""
 }
 public msg:any="";
 public clr:any={"red":false,"green":false};
 getclick(){
  const data=new FormData()
  data.append("fname",this.students.fname);
  data.append("lname",this.students.lname);
  data.append("email",this.students.email);
  data.append("phone",this.students.phone);
  data.append("pass",this.students.pass);
  data.append("cpass",this.students.cpass);
  console.log(this.students);
  //as subscribe takes the respnse on storing the data wheather succesful or already present that is a callback as we don't 
  //know the type we simply put it as any 
  this.http.register(data).subscribe((res:any)=>{
    console.log(res);
    this.msg=res.message;
    //in this api it is not working like so instead of status =1 i am using at status =0
    if(res.status===1){
      this.clr={"red":false,"green":true};
    }else{
      this.clr={"red":true,"green":false};
      this.r.navigate(['/contact']);
    }
  })

 }
 
}
