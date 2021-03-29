
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DEFAULT
import { environment				} from '../environments/environment';												// EXTERNAL MODULES
import { BrowserAnimationsModule	} from '@angular/platform-browser/animations';
import { BrowserModule				} from '@angular/platform-browser';
import { CdkTableModule				} from '@angular/cdk/table';
import { CdkTreeModule				} from '@angular/cdk/tree';
import { FlexLayoutModule			} from '@angular/flex-layout';
import { NgModule					} from '@angular/core';
import { Title						} from '@angular/platform-browser';
import { AppComponent				} from './app.component';
import { AppRoutingModule			} from './app-routing.module';
import { HomeComponent				} from './home/home.component';
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// AVAILABLE(by function)
import { AngularFireModule			} from '@angular/fire';																// AUTH
import { HttpClientModule			} from '@angular/common/http';														// AUTH
import { NgxAuthFirebaseUIModule	} from 'ngx-auth-firebaseui';														// AUTH
import { MaterialModule				} from "./sub-modules/material.module";
import { LoggedOutComponent			} from './logged-out/logged-out.component';											// AUTH
import { LoginComponent				} from './login/login.component';													// AUTH
import { GraphQLModule				} from './sub-modules/graphql.module';												// AUTH
import { CUSTOM_ELEMENTS_SCHEMA		} from '@angular/core';																// ELEMENT SUPPORT

import 'hammerjs';

export function firebaseAppNameFactory() { return `weja-us` }

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		LoggedOutComponent,
	],
	imports: [
		AngularFireModule.initializeApp(environment.firebase.creds),
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		CdkTableModule,
		CdkTreeModule,
		FlexLayoutModule,
		GraphQLModule,
		HttpClientModule,
		MaterialModule,
		NgxAuthFirebaseUIModule.forRoot(environment.firebase.creds, firebaseAppNameFactory, environment.firebase.configs),
	],
	providers: [
		{provide: 'googleTagManagerId', useValue: environment.google.analytics.trackingCode},
		Title
	],
	schemas:	[CUSTOM_ELEMENTS_SCHEMA],
	bootstrap:	[AppComponent]
})

export class AppModule {}