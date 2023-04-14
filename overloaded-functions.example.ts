// Dans cet exemple, nous avons défini 2 surcharges de la fonction getAnimalSound,
// chacune avec une signature différente en fonction de la valeur de l'argument animal. 

type Animal = 'chat' | 'chien'; 

function getAnimalSound(animal: "chat"): "Miaou";
function getAnimalSound(animal: "chien"): "Woof";
function getAnimalSound(animal: Animal): string {
    switch (animal) {
        case "chat":
            return "Miaou";
        case "chien":
            return "Woof";
    }
}

getAnimalSound('chat')

export {}