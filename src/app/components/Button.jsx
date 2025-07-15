import { Button } from "flowbite-react";

function ButtonCustom({ type, className, btnColor, onClick, icon, text }) {
    return (
        <Button
            type={type}
            className={className}
            color={btnColor}
            onClick={onClick}
        >
            {icon}
            {text}
        </Button>
    )
}

export { ButtonCustom };