type AlignType = "inherit" | "right" | "left" | "center"

export interface TableHeaderType {
  label: string,
  align?: AlignType
  data: string
}
