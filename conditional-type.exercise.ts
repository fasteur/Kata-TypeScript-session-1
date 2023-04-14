
function fromUTCStringToDate(utcString?: string): Date | undefined {
    return utcString ? new Date(utcString) : undefined;
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