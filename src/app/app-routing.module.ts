import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TaskComponent } from "./task/task.component";
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'task',
    component: TaskComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
