export interface parentListTypes {
    profile: string;
    parentId: number;
    first_name: string;
    last_name: string;
    name: string;
    email: string;
    gender: string;
    phoneNumber: string;
    action: string;
}

export interface addparentArray{
    parents: Array<addParentFormDataType>
}
export interface addParentFormDataType {
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    phoneNumber: string,
}