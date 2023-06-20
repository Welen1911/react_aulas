import React from "react";
interface IInputLoginProps {
    label: string;
    value: string;
    type: string;
    onChange: (newValue: string) => void;
    onPressEnter: () => void;
    ref: React.RefObject<HTMLInputElement>;
}


export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps> ((props, ref) => {
    return (
        <label>
            <span>{props.label}</span>
            <input 
                ref={ref}
                type={props.type} 
                value={props.value} 
                onKeyDown={e => e.key === "Enter"? props.onPressEnter() : undefined} 
                onChange={e => props.onChange(e.target.value)}
                
            />
        </label>
    )
});