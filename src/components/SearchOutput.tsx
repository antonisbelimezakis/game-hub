import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import { BsSearch } from "react-icons/bs";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  text?: string;
}

const SearchOutput = (props: Props) => {
  const [text, setText] = useState(props.text);

  const handle = (e) => {
    setText(e.target.value);
    props.onSearch(e.target.value);
  };

  return (
    <InputGroup marginTop={5} className="output">
      <InputLeftElement
        children={<BsSearch />}
        paddingTop={8}
        paddingBottom={8}
        fontSize={25}
        color={"darkgray"}
      />
      <Input
        paddingTop={8}
        paddingBottom={8}
        border="none"
        value={text}
        variant="filled"
        onChange={handle}
        fontSize={20}
      />
    </InputGroup>
  );
};

export default SearchOutput;
