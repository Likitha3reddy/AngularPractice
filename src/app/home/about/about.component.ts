import { Component } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

// import { provideHttpClient } from '@angular/common/http'; if httpclient Module  not there 
//and providers should not be in imports in providers 
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public api:ApiService,public r:Router){

  }
  public data:any= new FormGroup({
    email:new FormControl("",Validators.required),
    //FormControl acts as two binding 
    password:new FormControl("",Validators.required)
  })
  public submit:boolean=false;
  get form(){
    return this.data.controls;
  }
  public msg:any="";
  public clr:any={"red":false,"green":false};
  login(){
    // console.log(this.data);
    this.submit=true
    // console.log("its working why not me?")
    const newData=new FormData();
    newData.append('userEmail',this.data.value.email);
    newData.append('userPassword',this.data.value.password);

    this.api.login(newData).subscribe((res:any)=>{
      console.log(res);
      if(res.status===1){
        this.msg=res.message;
        this.clr={"red":false,"green":true};
        // setTimeout(()=>{
        //   this.r.navigate(['/home'])
        // },2000)
      }else{
        this.msg=res.message;
        this.clr={"red":true,"green":false};
        //this will store the data in localstorage of our browser
        localStorage.setItem("email",this.data.value.userEmail);
        
        setTimeout(()=>{
          this.r.navigate(['/contact'])
        },2000)
      }
    })

  }
}
