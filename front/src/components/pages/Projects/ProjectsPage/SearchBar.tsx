import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import TextField from '@mui/material/TextField';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { color } from '../../../utils/Colors';
import { projectsSliceState } from '../projectsSlice';
import { projectType } from './ProjectsPage';

type Props = {
  projectStore: projectsSliceState;
  isOnMobile: boolean;
}

const SearchBar = ({ projectStore, isOnMobile }: Props) => {
  const navigate = useNavigate();
  const [searchedProject, setSearchedProject] = useState<string>('');
  const [borderColor, setBorderColor] = useState<string>(color.searchBar);
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
    <div style={{ margin: '1rem', display: 'flex', color: color.searchBar }}>
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
          setBorderColor(newOptions.length ? color.searchBar : color.searchBarError);
          return newOptions;
        }}
        sx={{ width: '70vw' }}
        renderInput={(params) =>
          <ClickAwayListener onClickAway={() => setBorderColor(color.searchBar)}>
            <TextField
              {...params}
              variant='outlined'
              label={label}
              sx={{
                backgroundColor: color.textField,

                input: { color: color.searchBar },
                label: {
                  color: color.searchBar,
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
              onChange={() => setBorderColor(color.searchBar)}
            />
          </ClickAwayListener>}
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
