import { ChangeEvent } from "react";

export type CustomNumberTextFieldType = {
  label: string,
  value: number
  min?: number,
  max?: number
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any
}
