import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { QualificationComponent } from './qualification/qualification.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'qualification',component:QualificationComponent},
  {path:'skills',component:SkillsComponent},
  {path:'achievements',component:AchievementsComponent},
  {path:'qualities',component:QualitiesComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'',component:FooterComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
