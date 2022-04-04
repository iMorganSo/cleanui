# CleanUI
An API UI for connecting the other API's to the CleanUI UI's as module manager to fast up your API!

# Requirements
**Requires an Supported API Handler, Recommended(Definery).**

**Requires installing axios package.**
# Usages

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
@data: "CURRENT_SELECTED_OPTION"::"URL"@"SUCCESSFUL??FAILURE SEND">>"<PROMISE%OBJECT@REPEAT>".
@author: "Main adminsitrator"@"<PROMISE%PERMISSION@FETCH>".
@time: "TIME_OF_SENDING"@"<PROMISE%TIMESTAMP@FETCH>".
@axios_data: "CURRENT_AXIOS_DATA_CACHE"@"<PROMISE%AXIOS_DATA@CACHE>".
@userCount: "CURRENT_USERS_COUNT_WITH_PERMISSION"::permisson?"each user permission and permission number"main_admin@"<PERMISSION_ADDRESS%USERS_EACH@FETCH>".
```

# Console options

| Options | Info |
| - | - |
|**send**| Send some text/number message to API's UI manager|
|**reply**| Reply to User/API/Data/Context/Manager some data|
|**add**| Add some user to your API console |
|**remove**| Remove some user to your API console|

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
