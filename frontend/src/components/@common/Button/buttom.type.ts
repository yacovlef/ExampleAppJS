export interface IButtonStyleProps {
    type?: 'submit';
    onClick?: () => void;
    size?: 'large' | 'middle' | 'small';
    responsive?: boolean;
    block?: boolean;
}

export interface IButtonProps extends IButtonStyleProps {
    loading?: boolean;
    children: string;
}
