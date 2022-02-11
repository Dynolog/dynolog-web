import { Button as StyledButton } from './styles'

interface ButtonProps {
    text: string
}

export const Button = ({ text }: ButtonProps) => {

    return (
        <StyledButton>
            {text}
        </StyledButton>
    )
}