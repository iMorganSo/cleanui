function _getCallerFile() {
    var filename;

    var _pst = Error.prepareStackTrace
    Error.prepareStackTrace = function (err, stack) { return stack; };
    try {
        var err = new Error();
        var callerfile;
        var currentfile;

        currentfile = err.stack.shift().getFileName();

        while (err.stack.length) {
            callerfile = err.stack.shift().getFileName();

            if(currentfile !== callerfile) {
                filename = callerfile;
                break;
            }
        }
    } catch (err) {}
    Error.prepareStackTrace = _pst;

    return filename;
}

function error(type, description, file) {
    this.type = type;
    this.description = description;
    this.file = undefined;
    this.moduleFile = process.mainModule.filename;
  
  if(!this.type) {
    return Error("Enter the error type first");
  } else if(this.file == undefined) {
  this.file = _getCallerFile()
  } else if(this.type == "DATABASE_ERROR") {
    return console.error("Database Error: " + description + ", at " + file)
  } else if(this.type == "INTERACTION_ERROR") {
    return console.error("Interaction Error: " + description + ", at " + file)
  } else if(this.type == "RUNNER_ERROR") {
    return console.error("Runner Error: " + description + ", at " + file)
  } else if(this.type == "EXTRACT_ERROR") {
    return console.error("Extract Error: " + description + ", at " + file)
  } else if(this.type == "ROUTER_ERROR") {
    return console.error("Router Error: " + description + ", at " + file)
  } else if(this.type == "CONSOLE_ERROR") {
    return console.error("Console Error: " + description + ", at " + file)
  } else if(this.type == "CLOUD_ERROR") {
    return console.error("Cloud Error: " + description + ", at " + file)
  } else if(this.type == "REQUEST_ERROR") {
    return console.error("Request Error: " + description + ", at " + file)
  } else if(this.type == "SOCKET_ERROR") {
    return console.error("Socket Error: " + description + ", at " + file)
  } else if(this.type == "SYSTEM_ERROR") {
    return console.error("System Error: " + description + ", at " + file)
  } else if(this.type == "OS_ERROR") {
    return console.error("OS Error: " + description + ", at " + file)
  } else if(this.type == "COUNTER_ERROR") {
    return console.error("Counter Error: " + description + ", at " + file)
  } else if(this.type == "CONTEXT_ERROR") {
    return console.error("Context Error: " + description + ", at " + file)
  } else if(this.type == "DEFAULT_ERROR") {
    return console.error("Error: " + description + ", at " + file)
  } else if(this.type == "UI_ERROR") {
    return console.error("UI Error: " + description + ", at " + file)
  } else if(this.type == "DEBUG_ERROR") {
    return console.error("Debug Error: " + description + ", at " + file)
  } else if(this.type !== "API_ERROR") {
    return TypeError("Enter a vaild Error Type")
  } else if(!this.description) {
    return Error("Enter an description")
  } else if(this.description !== String(this.description)) {
    return TypeError("Description must be string")
  }
}

module.exports = error;