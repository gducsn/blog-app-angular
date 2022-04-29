import { RouterModule, Routes } from "@angular/router";

import { PostComponent } from './post/post.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./home/home.component";

 const routes: Routes = [
    { path: 'post', component: PostComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: '**', pathMatch: 'full', component: NotFoundComponent }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }