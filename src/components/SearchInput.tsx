import { Input, InputGroup, InputLeftElement, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import SearchOutput from "./SearchOutput";

interface Props {
  onSearch: (searchText: string) => void;
  text?: string;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) {
          onSearch(ref.current.value);
          setText(ref.current.value);
          ref.current.value = "";
        }
      }}
    >
      <InputGroup className="block">
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          className="input1"
        />
        {text && <SearchOutput text={text} onSearch={onSearch} />}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
