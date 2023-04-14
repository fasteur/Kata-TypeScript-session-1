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

// Type union de nos 2 class
type AllClass = Class1 | Class2;

// Type conditionnel 
type MyClass<T extends AllClass> = T extends Class1 ? string : T extends Class2 ? number : null;

function getProperty<T extends AllClass>(myClass: T): MyClass<T> {

    // Ici, j'ai converti la valeur de retour de la fonction en any. Il s'agit d'un problème ouvert dans TypeScript, et la seule façon de tirer parti de l'utilisation d'opérateurs conditionnels est de convertir le retour de cette manière.
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

