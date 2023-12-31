import { Container, FormControl, IconButton } from "@mui/material";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { TextFieldStyled } from "../textField/styles";
import { SearchBarStyle } from "./styles";

export default function SearchBar() {
  const [searchText, setSearchText] = useState<string>("");

  function handleClickSearch() {
    console.log("Click to search => ", searchText);
  }

  function handleChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  return (
    <SearchBarStyle>
      <Container className="container">
        <FormControl className="form-control" variant="outlined">
          <TextFieldStyled
            type="text"
            id="search_food"
            value={searchText}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChangeSearch(event)
            }
            onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
              if (event.key === "Enter") {
                handleClickSearch();
              }
            }}
            InputProps={{
              startAdornment: (
                <IconButton aria-label="Buscar" onClick={handleClickSearch}>
                  <span className="material-icons">search</span>
                </IconButton>
              ),
            }}
          />
        </FormControl>
      </Container>
    </SearchBarStyle>
  );
}
