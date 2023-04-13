
class Class1 {

    property1: string;
    
    constructor(obj: Class1) {
        Object.assign(this, obj);
    }
}
class Class2 {
    
    property2: number;
    
    constructor(obj: Class2) {
        Object.assign(this, obj);
    }
}

function getProperty(myClass: any): any {

    let value: any = null;

    if (myClass instanceof Class1) {
        value = myClass.property1;
    } else if (myClass instanceof Class2) {
        value = myClass.property2;
    }
    return value;
}

const myClass1 = new Class1({
    property1: "property1"
});

const myClass2 = new Class2({
    property2: 2
});

getProperty(myClass2) // number

export {};