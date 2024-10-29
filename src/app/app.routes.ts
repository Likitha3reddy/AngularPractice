import { Routes } from '@angular/router';
import { DirectiveArrayComponent } from './directive-array/directive-array.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './home/about/about.component';
import { SkillsComponent } from './home/skills/skills.component';

export const routes: Routes = [
    {
        path:"",
        component:DirectiveArrayComponent
    },
    {
        path:"home",
        component:HomeComponent,
        children:[
            {
                path:"about",
                component:AboutComponent
            },
            {
                path:"skills",
                component:SkillsComponent
            }
        ]
    },
    {
        path:"contact",
        component:ContactComponent
    },
];
