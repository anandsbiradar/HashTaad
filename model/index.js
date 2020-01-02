const mongoose = require("mongoose");
const csv = require("csv-parser");
const fs = require("fs");

mongoose.connection.openUri("mongodb://localhost/city-data-repo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.Promise = global.Promise;

mongoose.set("debug", true);

const CityMaster = require("./cityMaster");

//If Database is empty, then data is migrated
function initialMigration() {
    CityMaster.find({}, function (err, records) {
        if (!records.length) {
            const stream = fs.createReadStream("./migration/input.csv");
            const csvStream = csv()
                .on("data", function (data) {
                    let newCity = new CityMaster();
                    newCity.state = data.State;
                    newCity.stateCode = parseInt(data.State_Code);
                    
                    newCity.district.name = data.District;
                    newCity.district.districtCode = parseInt(data.District_Code);
                    
                    newCity.district.city.town = data.City;
                    newCity.district.city.urbanStatus = data.Urban_Status;
                    
                    newCity.save();
                    //console.log(data);
                }).on("end", function () {
                }).on("error", function () {
                });
            stream.pipe(csvStream);
        }
    });
}

initialMigration();

module.exports.CityMaster = require("./cityMaster");