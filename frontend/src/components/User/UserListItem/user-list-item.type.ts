export interface IUserLIstItem {
    id?: number;
    lastName: string;
    firstName: string;
    email: string;
}

export interface IUserLIstItemProps {
    user: IUserLIstItem;
}
