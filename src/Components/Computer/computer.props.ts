import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ComputerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    computer: number[]
}