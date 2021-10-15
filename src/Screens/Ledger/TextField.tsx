import React from "react";
interface Props {
  name: string;
  surname: string;
}
const TextField: React.FC<Props> = ({ name, surname }) => {
  return (
    <div>
      <h4>{name}</h4>
      <h4>{surname}</h4>
    </div>
  );
};

export default TextField;
