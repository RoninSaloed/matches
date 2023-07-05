import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface UserProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    user: number[]
}