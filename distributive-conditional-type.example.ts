// Dans cet exemple, ToArray est un type conditionnel distributif qui vérifie si T n'est pas un tableau (any). 
// Si c'est le cas, T est retourné sous forme de tableau, sinon il est retourné sous forme de tableau (T[]). 

type ToArray<T> = T extends any[] ? T : T[];
type A = ToArray<number>; // number[]

// Si nous insérons un type d'union dans ToArray, le type conditionnel sera appliqué à chaque membre de cette union.
type B = ToArray<number | string>; // number[] | string[]


// En règle générale, la distributivité est le comportement souhaité. Pour éviter ce comportement, vous pouvez entourer chaque côté du mot clé extend de crochets.
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
 
// 'StrArrOrNumArr' n'est plus une union.
type StrArrOrNumArr = ToArrayNonDist<string | number>;