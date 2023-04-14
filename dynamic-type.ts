// Random interface
interface IChoice {
    id: number;
    label: string;
}

// Indexed Access Type Keys
enum FilterTypeEnum {
    TEXT = 'TEXT',
    MULTI_TEXT = 'MULTI_TEXT',
    DATE = 'DATE',
    CHOICE = 'CHOICE',
}

// Indexed Access Type
type FilterDataByType = {
    [FilterTypeEnum.TEXT]: string,
    [FilterTypeEnum.MULTI_TEXT]: string[],
    [FilterTypeEnum.DATE]: Date,
    [FilterTypeEnum.CHOICE]: IChoice[],
}

// Shape
type FilterModelShape<FilterType> = {
    type: FilterType;
    // Conditionnal type
    data: FilterType extends keyof FilterDataByType ? FilterDataByType[FilterType] : never;
}

// Utility type
type ValueOf<T> = T[keyof T];

// Mapped type
type MappedType = {
    [Key in keyof FilterDataByType]: FilterModelShape<Key>
}

// Dynamic type
type FilterModelType = ValueOf<MappedType>;

const filterModel: FilterModelType = {
    type: FilterTypeEnum.CHOICE,
    data: [{
        id: 1,
        label: 'label'
    }]
}

export {}