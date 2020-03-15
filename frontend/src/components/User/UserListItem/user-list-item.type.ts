export interface IUserListItem {
    id: number;
    lastName: string;
    firstName: string;
    email: string;
}

export interface IUserListItemProps {
    user: IUserListItem;
}
