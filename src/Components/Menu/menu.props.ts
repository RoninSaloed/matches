import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setMatchesLength: any,
    matchesLength: number,
    isUserTurn: boolean,
    setIsUserTurn: any,
    computer: number[],
    user: number[]
}