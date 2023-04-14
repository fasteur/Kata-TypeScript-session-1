// Dans cet exemple, nous avons défini un type Animal qui représente les deux types d'animaux possibles : "chat" et "chien". 
// Ensuite, nous avons défini un type générique Sound qui prend un type T qui étend le type Animal. 
// Le typage conditionnel est utilisé pour déterminer le son approprié à associer à chaque type d'animal.
// L'opérateur extends est utilisé pour créer des contraintes de type. Il permet de spécifier que le type générique doit satisfaire une condition particulière pour être valide.

// Example 1

type Animal = "chat" | "chien";

type Sound<T extends Animal> = T extends "chat" ? "Miaou" : "Woof";

let chatSound: Sound<"chat"> = "Miaou"; // Type de chatSound est "Miaou"
let chienSound: Sound<"chien"> = "Woof"; // Type de chienSound est "Woof"

// On profite de l'auto-complétion

// Example 2

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
    // Lien vers l'issue: https://github.com/microsoft/TypeScript/issues/33912
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

