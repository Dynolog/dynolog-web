import { InputHTMLAttributes } from "react"
import { BaseInput } from "./styles"

interface InputPops extends InputHTMLAttributes<HTMLInputElement> { }

export const Input = ({ ...props }: InputPops) => {
    return (
        <BaseInput { ...props } />
    )
}