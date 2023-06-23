
interface IButtonLoginProps {
    type ?: "button" | "submit" | "reset";
    onclick: () => void;
    children: string;
}
export const ButtonLogin: React.FC<IButtonLoginProps> = ({onclick, type, children}) => {
    return (
        <button type={type} onClick={onclick}>{children}</button>
    )
}