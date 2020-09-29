import { IFilterDataElement } from '../../Containers/FilterContainer/types';

export function dataToFiltersData(data: any[]): IFilterDataElement[] {
    return data.map(({ id, subjectName }) => ({
        label: subjectName,
        value: id,
    }));
}
