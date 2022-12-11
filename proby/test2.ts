class A {
    private powitanie:string = 'czesc';
    witaj() {
        console.log(this.powitanie);
    }
}

let a = new A();
a.witaj();