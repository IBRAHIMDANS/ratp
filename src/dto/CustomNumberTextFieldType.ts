import { ChangeEvent } from "react";

export interface CustomNumberTextFieldType {
  label: string,
  value: number
  min?: number,
  max?: number
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any
}
