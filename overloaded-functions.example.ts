function getAnimalSound(animal: "chat"): "Miaou";
function getAnimalSound(animal: "chien"): "Woof";
function getAnimalSound<T extends Animal>(animal: T): T extends "chat" ? "Miaou" : "Woof";
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