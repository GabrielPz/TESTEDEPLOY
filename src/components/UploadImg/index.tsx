import { Dispatch, SetStateAction, useState } from "react";
import { Eye, EyeClosed, Pencil, Phone } from "phosphor-react";


interface FieldProps {
id: string;
type: React.HTMLInputTypeAttribute | undefined;
initialType?: React.HTMLInputTypeAttribute;
label: string;
icon?: React.ReactNode;
placeholder: string;
isEditable?: boolean;
value: File | null;
setValue: Dispatch<SetStateAction<File | null>>;
required?: boolean;
width?: "50%" | "100%";
}

export function UploadImagem({
id,
label,
icon,
placeholder,
type,
initialType = type,
value,
setValue,
isEditable = false,
required = false,
width = "100%",
}: FieldProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [typed, setTyped] = useState(type);
    const [toggleEdit, setToggleEdit] = useState(isEditable);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Atualize o estado com o arquivo carregado
    setValue(e.target.files ? e.target.files[0] : null);
    }

    function handleClick() {
    setIsVisible(!isVisible);
    if (typed === "password") return setTyped("text");
    return setTyped("password");
    }

    const isPassword = initialType === "password";

    const widthInput = width === "50%" ? "w-[50%]" : "w-full";

    return (
    <fieldset className={`${widthInput} flex flex-col gap-1 group`}>
        
        <div className="relative">
        <div
            className={`absolute top-3.5 left-2 text-xl text-zinc-600 
            `}
        >
            {icon}
        </div>
        <input
            onChange={handleChange}
            disabled={toggleEdit}
            className={`${
            toggleEdit ? "disabled:cursor-not-allowed disabled:border-none" : ""
            } w-full min-w-min p-3 ${icon ? "pl-10" : ""}
            bg-zinc-200 border-b-2 border-r-2 border-zinc-300 
            outline-none hover:border-zinc-500 focus:border-zinc-500
            rounded-md transition-colors content-center`}
            id={id}
            type={typed}
            required={required}
        />
        </div>
    </fieldset>
    );
}