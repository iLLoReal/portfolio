import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgColor, { colors } from '../../../utils/Colors';
import { projectsSliceState } from '../projectsSlice';
import { projectType } from './ProjectsPage';

type Props = {
  projectStore: projectsSliceState;
  isOnMobile: boolean;
}

const SearchBar = ({ projectStore, isOnMobile }: Props) => {
  const navigate = useNavigate();
  const [searchedProject, setSearchedProject] = useState<string>('');
  const [borderColor, setBorderColor] = useState<string>(colors.pureWhite);
  const label = useMemo<string>(() => {
    if (!isOnMobile && searchedProject.length)
      return 'HIT ENTER'
    return 'projects'
  }, [searchedProject, isOnMobile]);
  const projectSearchList = useMemo<{ label: string }[]>(() => {
    return projectStore.projects.map((project: projectType) => ({ label: project.title }))
  }, [projectStore.projects]);

  const handleSearchValidation = (key?: React.KeyboardEvent<HTMLDivElement>) => {
    if (key?.code === 'Enter' || !key) {
      console.log('about to navigate to ', searchedProject);
      navigate(`/projects/${searchedProject}`);
    }
  }

  const handleSearchInputChange = (value: { label: string; } | null) => {
    console.log('Value is : ', value);
    setSearchedProject(value?.label || '')
  }

  return (
    <div style={{ display: 'flex', color: colors.pureWhite }}>
      <Autocomplete
        disablePortal
        options={projectSearchList}
        filterOptions={(options, state) => {
          const newOptions: { label: string; }[] = [];
          options.forEach((option) => {
            if (option.label.toLowerCase().includes(state.inputValue.toLowerCase())) {
              newOptions.push(option);
            }
          });
          setBorderColor(newOptions.length ? colors.pureWhite : colors.red);
          return newOptions;
        }}
        sx={{ width: 300 }}
        renderInput={(params) =>
          <TextField
            {...params}
            variant='outlined'
            label={label}
            sx={{
              input: { color: colors.pureWhite },
              label: {
                color: colors.pureWhite,
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
              },

            }}
            onChange={() => console.log((params.InputProps.endAdornment as React.ReactElement).props)}
          />}
        onChange={(event, value) => handleSearchInputChange(value)}
        onKeyDown={(key: React.KeyboardEvent<HTMLDivElement>) => handleSearchValidation(key)}
      />
      {isOnMobile && searchedProject.length ?
        <Button
          variant='outlined'
          onClick={() => handleSearchValidation()}
        >Ok</Button> : null}
    </div>
  )
}

export default SearchBar
