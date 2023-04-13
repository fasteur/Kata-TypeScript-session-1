interface IChoice {
    id: number;
    label: string;
}

enum FilterTypeEnum {
    TEXT = 'TEXT',
    MULTI_TEXT = 'MULTI_TEXT',
    DATE = 'DATE',
    CHOICE = 'CHOICE',
}

type FilterDataByType = {
    [FilterTypeEnum.TEXT]: string,
    [FilterTypeEnum.MULTI_TEXT]: string[],
    [FilterTypeEnum.DATE]: Date,
    [FilterTypeEnum.CHOICE]: IChoice[],
}

type FilterModelShape<FilterType> = {
    type: FilterType;
    data: FilterType extends keyof FilterDataByType ? FilterDataByType[FilterType] : never;
}

type ValueOf<T> = T[keyof T];

type MapType = {
    [Key in keyof FilterDataByType]: FilterModelShape<Key>
}

type FilterModelType = ValueOf<MapType>;

const filterModel: FilterModelType = {
    type: FilterTypeEnum.CHOICE,
    data: [{
        id: 1,
        label: 'label'
    }]
}

export {}