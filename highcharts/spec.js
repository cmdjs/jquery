define(function(require) {

    var $ = require("$");
    var Highcharts = require('./src/highcharts');

    require('./src/exporting');
    require('./src/highcharts-more');

    describe('Highcharts', function() {
        it('should has spec memeber', function() {
            expect(Highcharts.version).to.be.a('string');
            expect(Highcharts.seriesTypes.gauge).to.be.a('function');
            expect(Highcharts.post).to.be.a('function');
        });
    });
});
