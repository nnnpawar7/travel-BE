const mongoose = require("mongoose");

const db = mongoose
  .connect(
    "mongodb+srv://samedkusnale8:SAMM2001@cluster0.kvsrvog.mongodb.net/?retryWrites=true&w=majority"
    )


    exports.db = db;