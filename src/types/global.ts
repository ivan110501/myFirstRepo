export type FieldType = {
  label: string;
  value: string;
};

export type CardDataType = {
  img: string;
  fields: FieldType[];
};

export type DataType = {
  printers: CardDataType[];
};
