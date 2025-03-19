interface ButtonProps {
  text: string;
  bgColor: string;
  color: string;
}

function Button({ text, bgColor, color }: ButtonProps) {
    return <button style={{ backgroundColor: bgColor, color: color }}>{text}</button>
}
export default Button