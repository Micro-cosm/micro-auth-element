

import { NgModule			} from '@angular/core';
import { RouterModule		} from '@angular/router';
import { Routes				} from '@angular/router';
import { AuthGuard			} from './_guards/auth.guard';
import { HomeComponent		} from './home/home.component';
import { LoggedOutComponent	} from "./logged-out/logged-out.component";
import { LoginComponent		} from './login/login.component';

const routes: Routes = [
	{ path: '',		redirectTo: 'login', pathMatch: 'full'								},
	{ path: 'home',					component: HomeComponent, canActivate: [AuthGuard]	},
	{ path: 'logged-out',			component: LoggedOutComponent						},
	{ path: 'login',				component: LoginComponent							},
	{ path: 'login/:returnService',	component: LoginComponent							},
	{ path: '**',	redirectTo: 'login'												 	}
];

@NgModule({
	imports: [ RouterModule.forRoot( routes, { enableTracing: false, useHash: true })],							// { initialNavigation: 'enabled' }  // support for SSR
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
