import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './composants/users/users.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full'},
 // { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}