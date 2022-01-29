import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamiliaComponent } from './components/familia/familia.component';
import { IndexComponent } from './components/index/index.component';



const routes: Routes = [
  {
    path: '',
     component: IndexComponent
  },

  {path: 'animais', 
  component: FamiliaComponent
  },

  {path: 'familia', 
  component: FamiliaComponent
  },

  {path: 'frutas', 
  component: FamiliaComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


