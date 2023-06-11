import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autocomplete, TextField } from "@mui/material";
import { fetchLocations } from "services/Api/LocationApi";

const IconCityField = ({ value, icon, label, onChange }) => {
  const [city, setCity] = useState(value);
  const [inputCity, setInputCity] = useState(value.label);
  const [cityResults, setCityResults] = useState([value]);

  useEffect(() => {
    setCity(value);
    setInputCity(value.label);
  }, [value]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchLocations(inputCity).then((results = []) => {
        const resultMap = new Map();
        for (let result of results) {
          const label = `${result.EnglishName}, ${result.Country.EnglishName}`;
          if (resultMap.has(label)) {
            continue;
          }
          resultMap.set(label, {
            key: result.Key,
            name: result.EnglishName,
            label,
            country: result.Country.EnglishName,
          });
        }

        return setCityResults([...resultMap.values()]);
      });
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [inputCity]);

  const handleCityChange = (event, newValue) => {
    setCity(newValue);
    onChange(newValue);
  };

  return (
    <div className="icon-input">
      <FontAwesomeIcon className="input-icon" icon={icon} />
      <Autocomplete
        options={cityResults}
        value={city}
        inputValue={inputCity.label}
        sx={{ width: 150 }}
        onChange={(event, newValue) => handleCityChange(event, newValue)}
        onInputChange={(event, newInputValue) => setInputCity(newInputValue)}
        renderInput={(params) => (
          <TextField label={label} variant="standard" {...params} />
        )}
      />
    </div>
  );
};

export default IconCityField;
