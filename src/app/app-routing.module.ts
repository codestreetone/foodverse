import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { SignupComponent } from './signup/signup.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "news", component: NewsComponent
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "terms", component: TermsComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "signup", component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
