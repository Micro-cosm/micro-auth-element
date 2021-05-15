

// import { environment		} from "../environments/environment";
import { NgModule			} from '@angular/core';
import { RouterModule		} from '@angular/router';
import { Routes				} from '@angular/router';
import { LoginComponent		} from './login/login.component';
import { HomeComponent		} from './home/home.component';
import { AuthGuard			} from './_guards/auth.guard';
import { LoggedOutComponent	} from "./logged-out/logged-out.component";

const routes: Routes = [
	{ path: '',		redirectTo: 'login', pathMatch: 'full'			},
	{ path: 'login',				component: LoginComponent		},
	{ path: 'login/:returnService',	component: LoginComponent		},
	{ path: 'home',					component: HomeComponent,	canActivate: [AuthGuard]},
	{ path: 'logged-out',			component: LoggedOutComponent						},
	{ path: '**',	redirectTo: 'login' }
];

@NgModule({
	imports: [RouterModule.forRoot( routes, { enableTracing: false, useHash: true })],							// { initialNavigation: 'enabled' }  // support for SSR
	exports: [RouterModule]
})

export class AppRoutingModule {}
