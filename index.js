const axios = require("axios");
const Definery = require("definery");
const definer = Definery.definer;
const CleanUI = require("./ui.js");
const Database = require("./database.js")
const error = require("./errors.center.js");
module.exports = {CleanUI, Database, error} || CleanUI, Database, error;