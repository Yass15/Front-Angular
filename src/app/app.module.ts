import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { EtudiantComponent } from './members/etudiant/etudiant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MemberFormComponent } from './member-form/member-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutComponent } from './layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { ToolsComponent } from './tools/tools.component';
import { EventComponent } from './event/event.component';
import { AffectComponentComponent } from './affect-component/affect-component.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FirebaseModule } from './Firebase.module';
import { MatNativeDateModule } from '@angular/material/core';
import { ArticleFormComponent } from './article-form/article-form.component';
import { MatButtonModule } from '@angular/material/button';
import { ToolFormComponent } from './tool-form/tool-form.component';
import { AffectEtdComponent } from './affect-etd/affect-etd.component';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    EtudiantComponent,
    MemberFormComponent,
    ConfirmDialogComponent,
    LayoutComponent,
    DashboardComponent,
    ArticlesComponent,
    ToolsComponent,
    EventComponent,
    AffectComponentComponent,

    LoginComponent,
     ArticleFormComponent,
     ToolFormComponent,
     AffectEtdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    FirebaseModule,MatButtonModule,
    
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
