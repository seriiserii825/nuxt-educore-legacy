export type TSelectOption = {
  key: string | number;
  value: string;
};

export type TSelectOptionGroup = TSelectOption & {
  options: TSelectOption[];
};
