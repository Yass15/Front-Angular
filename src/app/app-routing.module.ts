import { AffectEtdComponent } from './affect-etd/affect-etd.component';
//Permet de basculer entre les differentes pages a travers les paths
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffectComponentComponent } from './affect-component/affect-component.component';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { MembersComponent } from './members/members.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {
    path: 'Events',
    pathMatch: 'full',

    component: EventComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',

    component: LoginComponent,
  },

  {
    //premier path de la route
    path: 'members',
    pathMatch: 'full',

    component: MembersComponent,
  },
  {
    //2eme path
    path: 'Create',
    pathMatch: 'full',

    component: MemberFormComponent,
  },
  {
    //2eme path
    path: 'CreatePub',
    pathMatch: 'full',

    component: ArticleFormComponent,
  },
  {
    path: 'members/:id/edit',
    pathMatch: 'full',

    component: MemberFormComponent,
  },

  {
    path: 'articles/:IDArticle/edit',
    pathMatch: 'full',

    component: ArticleFormComponent,
  },

  {
    path: 'articles/:IDArticle/affect',
    pathMatch: 'full',

    component: AffectComponentComponent,
  },
  {
    path: 'members/:id/affectToEns',
    pathMatch: 'full',

    component: AffectEtdComponent,
  },
  {
    path: 'dashboard',
    pathMatch: 'full',

    component: DashboardComponent,
  },
  {
    path: 'articles',
    pathMatch: 'full',

    component: ArticlesComponent,
  },
  {
    path: 'tools',
    pathMatch: 'full',

    component: ToolsComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'members',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
