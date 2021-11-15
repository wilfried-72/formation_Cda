//react
import React, { useState } from "react";

// Miu
import { Autocomplete, TextField } from "@mui/material";
import { Box, styled } from "@mui/system";

//redux
import { store } from "../store";
import { getMeteoCurrent } from "../store/actions/MeteoActions";
import { useSelector } from "react-redux";

const SelectCountry = () => {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
  });

  // const country = useSelector((state) => state.meteo.country);
  // console.log(country)
  const countryData = useSelector((state) => state.meteo.countryData)
  console.log("country", countryData)

  const [value, setValue] = useState("");
  // console.log(value)
  function handleChangeSelect(e, newValue) {
    setValue(newValue);
    //console.log(newValue);

 
    if (newValue) {
      store.dispatch(getMeteoCurrent(newValue.name))
    };
  }
  return (
    <Autocomplete
      value={value}
      onChange={(e, newValue) => handleChangeSelect(e, newValue)}
      sx={{ width: 300 }}
      options={countryData}
      autoHighlight
      freeSolo
      getOptionLabel={(option) => (option.name ? option.name : "")}
      // getOptionLabel={(value) => value.name}

      isOptionEqualToValue={() => true}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <CssTextField
          size="small"
          label="Rechercher..."
          variant="filled"
          {...params}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};

export default SelectCountry;

const countries = [
  {
    id: 833,
    name: "Paris",
    state: "",
    country: "IR",
    coord: {
      lon: 47.159401,
      lat: 34.330502,
    },
  },
  {
    id: 2960,
    name: "Dubai",
    state: "",
    country: "SY",
    coord: {
      lon: 36.321911,
      lat: 34.940079,
    },
  },
  {
    id: 3245,
    name: "Londres",
    state: "",
    country: "IR",
    coord: {
      lon: 44.98333,
      lat: 38.450001,
    },
  },
  {
    id: 3530,
    name: "Le Mans",
    state: "",
    country: "IR",
    coord: {
      lon: 46.168499,
      lat: 36.173302,
    },
  },
];
