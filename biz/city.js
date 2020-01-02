const CityMaster = require("../model/cityMaster");

class City {

    async getCitesByState(state) {
        try {
        return CityMaster.find({ 'state': {$regex: state }}, {state : 1, "district.districtCode": 1, "district.name":1, _id:0});
        } catch (err) {
            throw err;
        }
    }

    async getCitesBytown(town) {
        try {
            return CityMaster.find({ 'district.city.town': {$regex: town }}, {state : 1, "district.name":1, "district.city.town":1, _id:0});
        } catch (err) {
            throw err;
        }
    }

    async getCitesByDistrict(district) {
        try {
            return CityMaster.find({ 'district.name': {$regex: district }});
        } catch (err) {
            throw err;
        }
    }

}

module.exports = City;