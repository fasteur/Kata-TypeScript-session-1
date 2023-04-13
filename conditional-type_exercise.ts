
class Class1 {

    propertyOfClass1: string;
    
    constructor(obj: Class1) {
        Object.assign(this, obj);
    }
}
class Class2 {
    
    propertyOfClass2: number;
    
    constructor(obj: Class2) {
        Object.assign(this, obj);
    }
}

function getPropertyOfClass(myClass: any): any {
    let returnValue: any = null;
    if (myClass instanceof Class1) {
        returnValue = myClass.propertyOfClass1;
    } else if (myClass instanceof Class2) {
        returnValue = myClass.propertyOfClass2;
    }
    return returnValue;
}

const myClass1 = new Class1({
    propertyOfClass1: "propertyOfClass1"
});

const myClass2 = new Class2({
    propertyOfClass2: 2
});


getPropertyOfClass(myClass2) // number

export {};