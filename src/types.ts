export interface DataElement {
    [key: string]: string;
}

export type TypeType = DataElement & { isOpen: boolean } & { guessed: boolean }