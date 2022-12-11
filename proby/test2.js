var A = /** @class */ (function () {
    function A() {
        this.powitanie = 'czesc';
    }
    A.prototype.witaj = function () {
        console.log(this.powitanie);
    };
    return A;
}());

var a = new A();
a.witaj();
