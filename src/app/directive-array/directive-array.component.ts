import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

interface Person {
  img: string;
  name: string;
  description: string;
  buttonColor: string;
  salary: number;
}

@Component({
  selector: 'app-directive-array',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './directive-array.component.html',
  styleUrls: ['./directive-array.component.css'] 
})
export class DirectiveArrayComponent implements OnInit {
  public persons: Person[] = [
    {
      img: "./assets/images/nikki.jpg",
      name: "Nikhila",
      description: "Time",
      buttonColor: "primary",
      salary: 100000
    },
    {
      img: "./assets/images/jyothi.jpg",
      name: "Jyothi",
      description: "Listen",
      buttonColor: "success",
      salary: 907090
    },
    {
      img: "./assets/images/likki.jpg",
      name: "Likitha",
      description: "My rules.",
      buttonColor: "danger",
      salary: 8879090
    },
    {
      img: "./assets/images/hyndavi.jpg",
      name: "Hyndavi",
      description: "own rules",
      buttonColor: "primary",
      salary: 78097677
    },
  ];

  //navbar child routing header directive array component 
  public navs=[
    {
      name:"home",
      url:"/home",
      sub:[
        {
          name:"about",
          url:"/home/about"
        },
        {
          name:"skills",
          url:"/home/skills"
        }
      ]
    },
    {
      name:"contact",
      url:"/contact",
      sub:[]
    }
  ]
  constructor(public r:Router){

  }
  public email:any;
  ngOnInit(): void {
    // if(!localStorage.getItem("email")){
    //   this.r.navigate(['/home/about']);
    // }
    this.email=localStorage.getItem("email");
      
  }
  logout(){
    this.r.navigate(['/home/about']);
    localStorage.clear();
  }
}
