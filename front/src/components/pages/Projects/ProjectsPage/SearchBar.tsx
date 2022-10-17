import { FilterOptionsState } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useMemo, useState } from 'react';
import { projectType } from './ProjectsPage';

type Props = {
  projectList: projectType[];
  isOnMobile: boolean;
}

type optionsType = {
  label: string;
};

const SearchBar = ({ projectList, isOnMobile }: Props) => {
  const [searchedProject, setSearchedProject] = useState<string>('');
  const [borderColor, setBorderColor] = useState<string>('white');
  const label = useMemo<string>(() => {
    if (!isOnMobile && searchedProject.length)
      return 'HIT ENTER'
    return 'projects'
  }, [searchedProject, isOnMobile]);

  const renderInputStyle = {
    input: { color: 'white' },
    label: {
      color: 'white',
      "&.Mui-focused": {
        color: borderColor
      }
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderWidth: '2px',
        borderColor: borderColor,
      },
      "&.Mui-focused fieldset": {
        borderColor: borderColor,
      },
      fieldset: {
        borderColor: borderColor,
      },
    }
  }

  const projectSearchList = useMemo<optionsType[]>(() => {
    return projectList.map((project: projectType) => ({ label: project.title }))
  }, [projectList]);

  const handleSearchValidation = (key?: React.KeyboardEvent<HTMLDivElement>) => {
    if (key?.code === 'Enter' || !key) {
      console.log('about to navigate to ', searchedProject);
      window.location.replace(`/projects/${searchedProject}`);
    }
  }

  const handleSearchInputChange = (value: optionsType | null) => {
    console.log('Value is : ', value);
    setSearchedProject(value?.label || '')
  }



  const filterSearchBarOptions = (
    options: optionsType[],
    state: FilterOptionsState<optionsType>) => {
    const newOptions: optionsType[] = [];
    options.forEach((option) => {
      if (option.label.toLowerCase().includes(state.inputValue.toLowerCase())) {
        newOptions.push(option);
      }
    });
    setBorderColor(newOptions.length ? 'white' : 'red');
    return newOptions;
  }

  return (
    <div style={{margin: '10px'}}>
      <Autocomplete
        disablePortal
        options={projectSearchList}
        filterOptions={(options, state) => filterSearchBarOptions(options, state)}
        sx={{ width: 300 }}
        renderInput={(params) =>
          <TextField
            {...params}
            variant='outlined'
            label={label}
            sx={{ ...renderInputStyle }}
            onChange={() => console.log((params.InputProps.endAdornment as React.ReactElement).props)}
          />}
        onChange={(event, value) => handleSearchInputChange(value)}
        onKeyDown={(key: React.KeyboardEvent<HTMLDivElement>) => handleSearchValidation(key)}
      />
      {isOnMobile && searchedProject.length ?
        <Button
          variant='outlined'
          onClick={() => handleSearchValidation()}
        >
          Ok
        </Button> : null}
    </div>
  )
}

export default SearchBar
