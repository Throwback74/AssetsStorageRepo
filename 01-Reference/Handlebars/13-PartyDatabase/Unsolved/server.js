var orm = require("./config/orm.js");

// Select all party names
orm.selectAndOrder("party_name", "parties", "id");

// Select all client names
orm.selectAndOrder("client_name", "clients", "id");

// Find all parties where party type is grown-up
orm.selectWhere("parties", "party_type", "grown-up");

// All Clients and parties
orm.selectAndOrderBoth("client_name", "clients", "id", "party_name", "parties", "id");

// SELECT parties.party_name, clients.client_name
// FROM parties
// FULL OUTER JOIN clients ON parties.client_id=clients.client_id
// ORDER BY parties.client_id;
// Console log all the client names.
orm.select("client_name", "clients");

orm.select("party_name", "parties");
