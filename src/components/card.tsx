import { CardDataType, FieldType } from "../types/global";
import { ReactNode } from "react";
type Props = {
  data: CardDataType;
  children: ReactNode;
};

const Card = ({ data, children }: Props) => {
  return (
    <>
      <div className="card">
        <div className="card__body">
          <img className="card__image" src={data.img} alt="" />
          {data.fields.map((field: FieldType) => {
            return (
              <>
                <div
                  className="field"
                  style={{ backgroundColor: `${field.value}`, color: "white" }}
                >
                  <label className="field__label">{field.label}</label>
                  <div className="field__value">{field.value}</div>
                  {children}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
