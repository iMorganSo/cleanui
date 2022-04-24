const axios = require("axios");

const Database = require("./database.json")
const error = require("./errors.center.js")
const fs = require('fs')

const CleanUI = {
   get: function(url) {
       if(!url) {
           return Error("No specified URL")
       } else if(!url.startsWith("https://")) {
           return Error("URL must be https protocol")
       } else if(url == undefined) {
           return Error("Invalid URL")
       }
        return axios.get(url);
   },
   setSettingsFile: function(file) {
       const path = "./settings.peurest"
       fs.access(path, fs.F_OK, (err) => {
        if (err) {
          console.error(`Cannot find file with name ${path}, create a file with "${path}" name`)
          return
        } else {
            return console.log("Successfully set CleanUI settings file")
        }
})
        },
   console: {
        send: function(text) {
            if(!text) {
                return Error("Nothing to send");
            };
            return console.log("CleanUI: Sending: " + text + " to cleanUI API's Manager"), UI => {
                UI.console.send(text).serverNumber("1502");
            }
        },
        reply: function(data, toOne) {
            if(!data) {
                return Error("Nothing to reply");
            } else if(!toOne) {
                return Error("Enter a valid User/API/Data/Context/Manager to reply" );
            }
            return console.log("CleanUI: Replieng " + data + " to " + toOne), UI => {
                UI.console.reply({data: data, to: toOne}).serverNumber("1562");
            }
        },
        add: function(user, permission, author) {
            if(!user) {
                return Error("Specify a user ID to add to your API console");
            } else if(!permission) {
                return Error("Specify a permission to add the permission to the user");
            } else if(permission == "ADMINISTRATOR") {
                return console.log("CleanUI: Adding " + user + " With permission: " + permission + " to your API Console"),user => {
                    return user.authenticateNotification(user.id).then(user.add({type: "USER_CONSOLE", id: user.id, adder: author.id, permissions: [permission]}))
                }
            } else if(permission == "CONSOLE_MANAGER") {
                return console.log("CleanUI: Adding " + user + " With permission: " + permission + " to your API Console"),user => {
                    return user.authenticateNotification(user.id).then(user.add({type: "USER_CONSOLE", id: user.id, adder: author.id, permissions: [permission]}))
                }
            } else if(permission == "DATA_MANAGER") {
                return console.log("CleanUI: Adding " + user + " With permission: " + permission + " to your API Console"),user => {
                    return user.authenticateNotification(user.id).then(user.add({type: "USER_CONSOLE", id: user.id, adder: author.id, permissions: [permission]}))
                }
            } else if(permission == "CONTEXT_MANAGER") {
                return console.log("CleanUI: Adding " + user + " With permission: " + permission + " to your API Console"),user => {
                    return user.authenticateNotification(user.id).then(user.add({type: "USER_CONSOLE", id: user.id, adder: author.id, permissions: [permission]}))
                }
            } else if(permission == "SUPERVISOR") {
                return console.log("CleanUI: Adding " + user + " With permission: " + permission + " to your API Console"),user => {
                    return user.authenticateNotification(user.id).then(user.add({type: "USER_CONSOLE", id: user.id, adder: author.id, permissions: [permission]}))
                }
            } else if(permission !== "GUEST") {
                return Error("Unknown permission: " + permission);
                }
            return console.log("CleanUI: Adding " + user + " With permission: " + permission + " to your API Console"),user => {
                return user.authenticateNotification(user.id).then(user.add({type: "USER_CONSOLE", id: user.id, adder: author.id, permissions: [permission]}))
            }
        },
        remove: function(user, author) {
            if(!user) {
                return Error("Specify a user ID to remove from your API console");
            }

            return console.log("Removing " + user + " From your API Console"), user => {
                return user.remove({type: "USER_CONSOLE", id: user.id, author: author.id})
            }
        },
        permissions: {
            edit: function(user, permission, author) {
                if(!user) {
                    return Error("Specify a user ID to edit their permission");
                } else if(!permission) {
                    return Error("Specify the new permission(s) to edit the old permission of the user");
                } else if(permission == "ADMINISTRATOR") {
                    return console.log("Editing " + user + " permissions to " + permission), user => {
                        return user.authenticatePermission(user.id).then(user.permissions.edit({type: "PERMISSIONS_MANAGE", id: user.id, editor: author.id, permissions: [permission]}))
                    }
                } else if(permission == "CONSOLE_MANAGER") {
                    return console.log("Editing " + user + " permissions to " + permission), user => {
                        return user.authenticatePermission(user.id).then(user.permissions.edit({type: "PERMISSIONS_MANAGE", id: user.id, editor: author.id, permissions: [permission]}))
                    }
                } else if(permission == "DATA_MANAGER") {
                    return console.log("Editing " + user + " permissions to " + permission), user => {
                        return user.authenticatePermission(user.id).then(user.permissions.edit({type: "PERMISSIONS_MANAGE", id: user.id, editor: author.id, permissions: [permission]}))
                    }
                } else if(permission == "CONTEXT_MANAGER") {
                    return console.log("Editing " + user + " permissions to " + permission), user => {
                        return user.authenticatePermission(user.id).then(user.permissions.edit({type: "PERMISSIONS_MANAGE", id: user.id, editor: author.id, permissions: [permission]}))
                    }
                } else if(permission == "SUPERVISOR") {
                    return console.log("Editing " + user + " permissions to " + permission), user => {
                        return user.authenticatePermission(user.id).then(user.permissions.edit({type: "PERMISSIONS_MANAGE", id: user.id, editor: author.id, permissions: [permission]}))
                    }
                } else if(permission !== "GUEST") {
                    return Error("Unknown permission: " + permission);
                    }
                return console.log("Editing " + user + " permissions to " + permission), user => {
                    return user.authenticatePermission(user.id).then(user.permissions.edit({type: "PERMISSIONS_MANAGE", id: user.id, editor: author.id, permissions: [permission]}))
                }
            },
            count: 6,
            list: [{name: "ADMINISTRATOR"}, {name: "CONSOLE_MANAGER"}, {name: "DATA_MANAGER"}, {name: "CONTEXT_MANAGER"}, {name: "SUPERVISOR"}, {name: "GUEST"}],
        }
   },
   send: {
       UI: function(data) {
           if(!data) {
            return Error("No specified Data")
        }
           return send => {
               send(data).ui(data, {as: "UI_DATA"}).url("https://cleanui.gq/api/ui");
           }
       },
       JSON: function(data) {
        if(!data) {
            return Error("No specified Data")
        }
        return send => {
            send(data).json(data, {as: "{}"}).url("https://cleanui.gq/api/json")
        }
    },
    JSON_VALUE: function(data) {
        if(!data) {
            return Error("No specified Data")
        }
        return send => {
            send(data).jsonValue(data, {as: "VALUE[1,0]"}).url("https://cleanui.gq/api/jsonvalue")
        }
    },
    PRIMARE_CONSOLE: function(data) {
        if(!data) {
            return Error("No specified Data")
        }
        return send => {
            send(data).primareConsole(data, {as: "CONSOLE"}).url("https://cleanui.gq/api/primareconsole")
        }
    },
    EMIT_LIMITER: function(data) {
        if(!data) {
            return Error("No specified Data")
        }
        return send => {
            send(data).emitLimiter(data, {as: "LIMITER"}).url("https://cleanui.gq/api/emitlimiter")
        }
    },
    RESPANDBLE: function(data) {
        if(!data) {
            return Error("No specified Data")
        }
        return send => {
            send(data).respandble(data, {as: "RESPAND"}).url("https://cleanui.gq/api/respandble")
        }
    },
    JSON_OBJECT: function(data) {
        if(!data) {
            return Error("No specified Data")
        }
        return send => {
            send(data).jsonObject(data, {as: "OBJECT{}"}).url("https://cleanui.gq/api/jsonobject")
        }
    },
    DBA_DATA: function(data) {
        if(!data) {
            return Error("No specified Data")
        }
        return send => {
            send(data).dbaData(data, {as: "DBA_DATA"}).url("https://cleanui.gq/api/dbadata")
        }
    },
    JSON_ARRAY: function(data) {
        if(!data) {
            return Error("No specified Data")
        }
        return send => {
            send(data).jsonArray(data, {as: "[{}]"}).url("https://cleanui.gq/api/jsonarray")
        }
    },
    ARRAY: function(data) {
        if(!data) {
            return Error("No specified Data")
        }
        return send => {
            send(data).array(data, {as: "[]"}).url("https://cleanui.gq/api/array")
        }
    }
   },
   api: function(name, url, data, expires, expiresTime) {
        this.name = name;
        this.url = url;
        this.data = data;
        this.expires = expires;
        if(!name) {
            return Error("Specify a API Name");
        } else if(!url) {
            return Error("Specify a API URL");
        } else if(!url.startsWith("https://")) {
            return Error("API must be HTTPS protocol")
        } else if(!data) {
            return Error("Specify a API JSON Data");
        } else if(data !== Object(data)) {
            return Error("Specify a API JSON Data");
        }  else if(expires == false) {
            return this.name, this.url, this.data, this.expires;
        } else if(expires == true) {
            if(!expiresTime) {
                return Error("Enter an expiration time")
            } else if(expiresTime !== Number(expiresTime)) {
                return Error("Enter a valid expiration time")
            } else if(expiresTime) {
                this.expiresTime = expiresTime;

                if(this.expiresTime == expiresTime) {
                    setTimeout(function() {
                        return console.log("API " + name + " has expired"), this.name, this.url, this.data, this.expires, this.expiresTime, async(API) => {
                            return await API.setStatus("EXPIRED").expiredTime(this.expiredTime).setExpired(true).save();
                        }
                    }, this.expiresTime);
                }
             }
        }else if(expires !== false) {
            return Error("Specify a API Expires type, enter \`false\` for no expiration, enter \`true\` for expiration");
        }
        return this.name, this.url, this.data, this.expires;
   },
   info: {
       version: "0.0.6-DEV",
       package: "cleanui-api",
       website: "https://cleanui.gq",
       website_api_urls: "https://cleanui.gq/api",
       current_recomended_handler: "Definery",
       current_broken_flewer: "TPM",
       current_supported_process: "ENV",
       current_site_export: "default export{axt}",
       current_database_export: "default export{localter}",
       current_data_fetcher_package: "axios{ofDefault}"
   }
}

module.exports = CleanUI