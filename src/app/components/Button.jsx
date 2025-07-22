import { Button } from "flowbite-react";

function ButtonCustom({ type, className, btnColor, outline, onClick, icon, text }) {
    return (
        <Button
            type={type}
            className={className}
            color={btnColor}
            outline={outline}
            onClick={onClick}
        >
            {icon}
            {text}
        </Button>
    )
}

export { ButtonCustom };