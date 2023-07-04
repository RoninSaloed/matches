import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MatchesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    matches: number[],
    selected: number[],
    choiceCandle: any,
    user: number[]
}