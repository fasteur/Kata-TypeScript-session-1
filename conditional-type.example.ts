// Dans cet exemple, nous avons défini un type Animal qui représente les deux types d'animaux possibles : "chat" et "chien". 
// Ensuite, nous avons défini un type générique Sound qui prend un type T qui étend le type Animal. 
// Le typage conditionnel est utilisé pour déterminer le son approprié à associer à chaque type d'animal.

type Animal = "chat" | "chien";

type Sound<T extends Animal> = T extends "chat" ? "Miaou" : "Woof";

let chatSound: Sound<"chat"> = "Miaou"; // Type de chatSound est "Miaou"
let chienSound: Sound<"chien"> = "Woof"; // Type de chienSound est "Woof"