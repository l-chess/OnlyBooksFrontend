import { IoSearchSharp } from "react-icons/io5";
import { Input } from "../../atoms/Input/Input";

export const Searchbar = () => {
  return (
    <Input
      variant="framed"
      size="small"
      placeholder="Suchen"
      iconLeft={<IoSearchSharp className="text-xl" />}
    />
  );
};
