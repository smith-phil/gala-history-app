import { alpha, AppBar, Box, styled, Toolbar, Typography, InputBase } from "@mui/material"
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { NavLink } from "react-router-dom"
import { FormatAlignJustify } from "@mui/icons-material"

interface HeaderProps {
  title: string,
  onAddressChanged:(address:string)=>void
}

export const Header = (props: HeaderProps) => {
  const marginLeft = 4
  const boxSmall = { flexGrow: 1, gap: 2, display: { xs: 'flex', md: 'none' } }
  const boxMedium = { flexGrow: 1, gap: 2, display: { xs: 'none', md: 'flex' } }
  const headingSmall = { mr: 2, ml: marginLeft, p: 2, flexGrow: 1, display: { xs: 'flex', md: 'none' } }
  const headingMedium = { mr: 2, ml: marginLeft, p: 2, flexGrow: 1, display: { xs: 'none', md: 'flex' } }


  const addressChanged = (e:React.FocusEvent<HTMLInputElement>) => {
    let address = e.target.value
    if(address !== undefined) {
      props.onAddressChanged(address)
    }
  } 

  return (
    <AppBar>

      <StyledNavWrapper>
      <Toolbar disableGutters>
        <Typography
          variant='h2'
          component='h1'
          sx={headingSmall}>
          {props.title}
        </Typography>
        <Typography
          variant='h3'
          component='h1'
          sx={headingMedium}>
          {props.title}
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Enter an address ..."
            inputProps={{ 'aria-label': 'search', maxLength:45 }}
            onBlur={addressChanged}
            
          />
        </Search>
      </Toolbar>
      </StyledNavWrapper>
    </AppBar>
  )

}


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledNavWrapper = styled('div')(({ theme })=>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '43ch',
      },
    },
  },
}))


