export type PossibleString = string | undefined;

export type DateOrUndefined<T extends PossibleString> = T extends string ? Date : undefined


function fromUTCStringToDate<T extends PossibleString>(utcString: T): DateOrUndefined<T> {

    return (utcString ? new Date(utcString) : undefined) as DateOrUndefined<T>;

}


interface Dto {
    modifyOn: string;
}

class MyClass {

    modifyOn: Date;

    constructor(obj: MyClass) {
        Object.assign(this, obj);
    }

    public static fromDto(dto: Dto): MyClass {
        return new MyClass({
            modifyOn: fromUTCStringToDate(dto.modifyOn)
        })
    }

}

export { }