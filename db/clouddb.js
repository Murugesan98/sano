/**
 * Setup the Database URL
 */

 // mongodb+srv://admin:<password>@cluster0-46e5h.mongodb.net/test?retryWrites=true&w=majority
 //mongodb+srv://admin:<password>@cluster0-69atd.mongodb.net/test?retryWrites=true&w=majority
 //mongodb+srv://admin:<password>@cluster0-69atd.mongodb.net/test?retryWrites=true&w=majority
 //mongodb+srv://admin:<password>@cluster0-69atd.mongodb.net/test?retryWrites=true&w=majority
 //mongodb+srv://admin:<password>@cluster0-69atd.mongodb.net/test?retryWrites=true&w=majority
 //mongodb+srv://admin:<password>@cluster0-69atd.mongodb.net/test?retryWrites=true&w=majority
const DB_USER = "admin"
const DB_PASSWORD = "admins@12"
const DB_NAME = "acmetravel"
const CLUSTER_HOST = "cluster0-69atd.mongodb.net"

// Setup the DB URI
exports.DB_URI= "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@"+CLUSTER_HOST+"/"+DB_NAME+"?retryWrites=true&w=majority"