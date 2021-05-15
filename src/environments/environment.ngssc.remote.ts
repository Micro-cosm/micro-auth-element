

// V4
import { fb		} from "./fb.stage";


// ENV
const ALIAS			= process.env.TARGET_ALIAS	|| 'stage';
const DOMAIN		= process.env.TARGET_DOMAIN	|| 'weja.us';
const REALM			= process.env.TARGET_REALM	|| 'too.fb.';
const ROUTE_BASE	= process.env.TARGET_REALM	|| '/';
const TITLE			= process.env.TITLE			|| 'StèJá Föö(remote)';
const DEBUG			= process.env.DEBUG			|| 'true';
const LOGS			= process.env.LOGS			|| 'true';
const CMS_SHEET 	= process.env.CMS_SHEET 	|| 'https://docs.google.com/spreadsheets/d/14T-GM6Cx-OpT_s4MCytc1VL8fQax8eOC8IHdne-1Wf4/edit#gid=1055269632';

// DERIVED
const REALM_BASE	= process.env.REALM_BASE	|| 'https://'+REALM+DOMAIN;									// THIS MIFE
const AUTH_MIFE		= process.env.AUTH_MIFE		|| REALM_BASE+ROUTE_BASE+'#/';							// THIS MIFE
const THIS_MIFE		= AUTH_MIFE;

const CHAT_MIFE		= process.env.CHAT_MIFE		|| REALM_BASE+'/chat/#/';								  // OTHER MIFEN
const FORM_MIFE		= process.env.FORM_MIFE		|| REALM_BASE+'/form-element/#/';
const PRIVATE_MIFE	= process.env.PRIVATE_MIFE	|| REALM_BASE+'/private-element/#/';
const PUBLIC_MIFE	= process.env.PUBLIC_MIFE	|| REALM_BASE+'/public/#/';
const CMS_SERVICE	= process.env.CMS_SERVICE	|| 'https://foo.fb.weja.us/cms';							 // SERVICES
const AUTH_SERVICE	= process.env.AUTH_SERVICE	|| REALM_BASE+'/server-auth/';
const ASSETS_BUCKET	= process.env.ASSETS_BUCKET	|| 'https://storage.googleapis.com/'+DOMAIN;				   // ASSETS
const CMS_ALIAS		= process.env.CMS_ALIAS		|| ALIAS+'-EN_US';


export const environment = {
	production: Boolean(ALIAS === 'prod'),
	target: { alias: ALIAS },
	title: TITLE,
	assets: { bucket: ASSETS_BUCKET },
	mife: {
		this:		THIS_MIFE,
		auth:		AUTH_MIFE,
		register:	AUTH_MIFE + 'register',
		chat:		CHAT_MIFE,
		form:		FORM_MIFE,
		private:	PRIVATE_MIFE,
		public:		PUBLIC_MIFE
	},
	service: { auth: AUTH_SERVICE, cms: CMS_SERVICE },
	cms: { service: CMS_SERVICE, sheet: CMS_SHEET, alias: CMS_ALIAS },
	authGuardRemoteFallbackURL:	'/login',
	authGuardRemoteLoggedInURL:	'/home',
	firebase: {
		creds: {
			appId:				fb.APP_ID,
			apiKey:				fb.API_KEY,
			authDomain:			fb.AUTH_DOMAIN,
			databaseURL:		fb.DATABASE_URL,
			measurementId:		fb.GA4_MID,
			messagingSenderId:	fb.MESSAGING_SENDER_ID,
			projectId:			fb.PROJECT_ID,
			storageBucket:		fb.STORAGE_BUCKET,
		},
		configs: {
			authGuardFallbackURL:		'/login',
			authGuardLoggedInURL:		'/home',
			enableEmailVerification:	true,
			enableFirestoreSync:		true,
			nameMaxLength:				50,
			nameMinLength:				2,
			passwordMaxLength:			60,
			passwordMinLength:			8,
			toastMessageOnAuthSuccess:	false,
			toastMessageOnAuthError:	true,
			guardProtectedRoutesUntilEmailIsVerified:	true,
		},
	},
	google: { analytics: { trackingCode: fb.GA4_MID }},
	debug:	Boolean(DEBUG === 'true' ),
	logs:	Boolean(LOGS	=== 'true' ),
	timeZone: 'America/Denver'
};
