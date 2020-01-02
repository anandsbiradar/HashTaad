const CityBiz = require("../biz/city");

class CityController {

    register(app) {
        app.route("/state")
            .get(async (request, response, next) => {
                try {
                    const CityBizObj = new CityBiz();
                    const cityList = await CityBizObj.getCitesByState(request.query.id);
                    return response.json({
                        success: true,
                        data: cityList
                    });
                } catch (error) {
                    next(error);
                }
            });

            app.route("/town")
            .get(async (request, response, next) => {
                try {
                    const CityBizObj = new CityBiz();
                    const cityList = await CityBizObj.getCitesBytown(request.query.id);
                    return response.json({
                        success: true,
                        data: cityList
                    });
                } catch (error) {
                    next(error);
                }
            });

            app.route("/district")
            .get(async (request, response, next) => {
                try {
                    const CityBizObj = new CityBiz();
                    const cityList = await CityBizObj.getCitesByDistrict(request.query.id);
                    return response.json({
                        success: true,
                        data: cityList
                    });
                } catch (error) {
                    next(error);
                }
            });
    }
}

module.exports = CityController;