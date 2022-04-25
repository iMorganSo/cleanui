# CleanUI
An API UI for connecting the other API's to the CleanUI UI's as module manager to fast up your API!

# Requirements
**Requires an Supported API Handler, Recommended(Definery).**

**Requires installing axios package.**

# Storing Data

## Usages:

Data with expire time
```js
const { CleanUI, Database } = require("cleanui");
const Defnery = require("definery");
const define = Definery.definer;

CleanUI.get("Your API URL", res => {
   const response = define(res, {expires: true, expireTime: "Set expiration time as millie second without a string", res: res, data: "Enter your API data that you want to store using Object() with JSON strings, arrays, objects, etc"});
   CleanUI.send.<send_option>("Your API URL", response, {api: true, expires: true, expireTime: "Enter the expiration time again"});
})
```

Data without expire time
```js

CleanUI.get("Your API URL", res => {
   const response = define(res, {expires: false, res: res, data: "Enter your API data that you want to store using Object() with JSON strings, arrays, objects, etc"});
   CleanUI.send.<send_option>("Your API URL", response, {api: true, expires: false});
})

```
### Another usage
```js
const { CleanUI, Database } = require("cleanui");
const Defnery = require("definery");
const define = Definery.definer;

axios.get("Your API URL").then(res => {
    let realData = define(res, data => data.send("https//cleanui.gq/api/send_option").exiseUI("https://cleanui.gq/api/intents", intent => data.selectIntent("select your intent")));
    CleanUI.send.<send_option>(realData, res);
});
})
```

# Send options

| Options | Info |
| - | - |
|**UI**| send the API data to the **UI** as **Peura** data|
|**JSON**| Send the API data as **JSON** data|
|**JSON_VALUE**| Send the API data as **JSON Value** data|
|**PRIMARE_CONSOLE**| Send the API data as **Primare Console** data|
|**EMIT_LIMITER**| Send the API data as **Emit Limiter** data|
|**RESPANDBLE**| Send the API data as **Respandble** data|
|**JSON_OBJECT**| Send the API data as **JSON Object** data|
| **DBA_DATA**| Send the API data as **Direct Base Address(DBA)** data|

Returned To The UI Database(As **Peura** Language):

```json
@data: "Current selected send option"::"API URL"@"Successful or failure send">>"<PROMISE%DATA@SEND>".
@author: "Main adminsitrator"@"<PROMISE%AUTHOR_PERMISSION@FETCH>".
@time: "TIME_OF_SENDING"@"<PROMISE%TIMESTAMP@FETCH>".
@axios_data: "Current axios data cache"@"<PROMISE%AXIOS_DATA@CACHE>".
@userCount: "current users count with permissions"::permisson?"each user permission and permission number"main_admin@"<PERMISSION_ADDRESS%USERS_EACH@FETCH>".
```

# Console options

| Options | Info |
| - | - |
|**send**| Send some text/number message to API's UI manager |
|**reply**| Reply to User/API/Data/Context/Manager some data |
|**add**| Add some user to your API console |
|**remove**| Remove some user from your API console |
|**permissions**| Users permissions |

# Users
## Usages: 
Add user:
```js
const { CleanUI, Database } = require("cleanui");
const Defnery = require("definery");
const define = Defnery.definer;

const main_user = CleanUI.console.add("username", ["permission"]);
```
# 

Remove user:
```js
const { CleanUI, Database } = require("cleanui");
const Defnery = require("definery");
const define = Defnery.definer;

const someuser = CleanUI.console.add("username", ["permission"])
CleanUI.console.remove(someuser);
```
# 

# Users Permissions

| Zone Level / Permissions | Info |
| - | - |
| DANGER / **ADMINISTRATOR**| Giving the user all the access of editing, managing, Your API|
| HIGH / **CONSOLE_MANAGER**| Giving the user all the access of editing, managing... Your Console|
| HIGH / **DATA_MANAGER** | Giving the user all the access of editing, managing, removing... Your API Data|
| MEDIUM / **CONTEXT_MANAGER** | Giving the user all the access of editing, managing, removing... Your API Context|
| MEDIUM / **SUPERVISOR** | Giving the user access to supervise, use... Your API|
| LOW / **GUEST** | Giving the user access to use, send an specified data to Your API, **WON'T IMPACT YOUR API**|
| DEFAULT / **USER** | Giving the user access to use Your API|
# 

# Permissions options
| Option | Info |
| - | - |
| **edit** | Edit some user permission |
| **count**| Permissions count |
| **list**| Permissions list |
# 
## Usages:

Edit user permission:

```js
const { CleanUI, Database } = require("cleanui");
const Defnery = require("definery");
const define = Defnery.definer;

const main_user = CleanUI.console.add("username", ]"permission"]);

CleanUI.console.permissions.edit(main_user, ["new permission"]);
```
# 
# API

# API options
| Option | Info |
| - | - |
| **name** | Displays your API name |
| **url**| Displays your API url |
| **data**| Displays your stored API data |
| **expires** | Displays if your API with expiration or not|
| **expiresTime** | Displays your API expiration Time, **ONLY WORKS IF YOUR API HAS EXPIRATION**|
# 
## Usages:

Add your API:

```js
const { CleanUI, Database } = require("cleanui");
const Defnery = require("definery");
const define = Defnery.definer;

const myAPI = new CleanUI.api("Your API name", "your API URL", {"Your API Data that you want to be stored, inside JSON object"}, "expiration: true for expiration, false for no expiration", "if expiration, enter the expiration time");
```
# 

# Errors center

# Errors options

| Option | Info |
| - | - |
| **DEFAULT_ERROR** | Default Error |
| **UI_ERROR**| User Interface(UI) Error |
| **INTERACTION_ERROR** | Interaction Error |
| **RUNNER_ERROR** | Runner Error |
| **EXTRACT_ERROR** | Extract Error |
| **ROUTER_ERROR** | Router Error |
| **CONSOLE_ERROR** | Console Error |
| **CLOUD_ERROR** | Cloud Error |
| **REQUEST_ERROR** | Request Error |
| **SOKET_ERROR** | Soket Error |
| **SYSTEM_ERROR** | System Error |
| **OS_ERROR** | Operating System(OS) Error |
| **COUNTER_ERROR** | Counter Error |
| **CONTEXT_ERROR** | API Context Error |
| **DEBUG_ERROR** | Debug Error |
| **API_ERROR** | Application Programming interface(API) Error |
# 

usage
```js
const { CleanUI, Database, error } = require("cleanui");
const Defnery = require("definery");
const define = Defnery.definer;
const axios = require("axios");

const something = {hello: "hello", world: "world"};

if(something.hello !== "hello") {
   return new error("DEFAULT_ERROR", "Hello is undefined or unfetched")
} else if(something.hello == "hello") {
   return console.log("*hello* world!!!!!")
};

// using axios:
axios.get("https://cleanui.gq/api/ui", response => {
   if(response.data.interaction_status !== "200") {
      return new error("INTERACTION_ERROR", "Interaction status is not 200")
   } else {
      return console.log("Success interaction")
   }
})

```

# CleanUI set settings file

#### Note: Only using **peurest(peura settings)** language file
#### Note: File name must be **settings.peurest**
#### Note: File must be exists in the project files and not inside any folder
## Faq:
## Can i use CleanUI without any settings file? yes, you can use CleanUI without any settings file, but you won't edit any settings
## Can i use **JSON** instead? no, why? Peurest is the only language that supporting all the programming(Most of popular) Languages instead of **JSON** that only letting you edit Javascript or else.

## How do i use **Peurest**?:

Step 1: you must create a file called **settings.peurest** in the project files without putting it in any folder.
Step 2: Import the file in the main JavaScript file:


```js
const { CleanUI, Database } = require("cleanui");
const Defnery = require("definery");
const define = Defnery.definer;

CleanUI.setSettingsFile(); // File must be settings.peurest
```
Step 3: start entering the packages that you want to use, if the package:

```peurest
using system.config;
using "package without string" from "author/file/package manager";
```
Set 4: Enter your languages that you're using in the project,

```peurest
using system.config;

Lang: enter_full_language_name:: {
   # now here set the settings of the language, even an file, example:
   Strings: {
      hello: "hello";
      world: "world"
   };
   Numbers: {
      zero: 0;
      one: 1;
      two: 2;
      three: 3
   };
   Booleans: {
      true: true;
      false: false
   };
   Objects: {
      object1: {
         hello: "hello";
         world: "world"
      };
      object2: {
         hello: "hello";
         world: "world"
      };
   }
}

# Full language example:

using Exit.System from "./commander/secet/ports/secretUse.js";

Lang: JavaScript:: {
   Console: {
      Adduser: {
         username: "username";
         id: "id";
         permission: ["permission"];
      };
      EditConsoleName: Exit.System.Console.EditName("Old name", "New name");
      }
   }

# Edit An file settings:

File: "./file":: {
   Path: {
      FilePath: ".../file";
   }
};

# Full File example:

File "./commander/paths/jsonData/database.json":: {
   Path: {
      FilePath: "./commander/paths/jsonData/database.json";
   };
   Info: {
      CreatedAt: "4/26/2022";
      LatestUpdatedAt: "4/29/2022";
      CreatedBy: "CleanUI";
      UpdatedBy: "CleanUI"
   };
   Updates: {
      History: {
         "4/29/2022": {
            UpdatedBy: "CleanUI";
            UpdatedAt: "4/29/2022";
            UpdatedAtTime: "12:34:21 PM";
            UpdateInfo: {
               Language: "JSON";
               File: "database.json";
               DataType: "JSON_VALUE";
               Packages: {
                  "clean.ui-api": "0.0.5-DEV";
                  "axios": "0.19.2";
                  "definery": "0.0.1-DEV";
               };
            }
         }
      }
   }
   }
};
}
```

Step 5: You all done!

# CleanUI public info

# Info options
| Option | Info |
| - | - |
| **version** | Displays CleanUI package version |
| **package**| Displays CleanUI package name |
| **website**| Displays CleanUI website API data |
| **website_api_urls** | Displays CleanUI all API URL's|
| **current_recomended_handler** | Displays CleanUI recomended handler|
| **current_broken_flewer** | Displays current broken flewer export|
| **current_supported_process** | Displays current supported process |
| **current_site_export** | Displays current site exporter|
| **current_database_export** | Displays current database exporter|
| **current_data_fetcher_package** | Displays current data fetcher package|