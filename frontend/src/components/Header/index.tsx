import Stack from '@mui/material/Stack';
//import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from '../DatePicker';
import NavbarBreadcrumbs from '../NavBarBreadCrumbs';
//import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../../theme/ColorModeIconDropdown';

//import Search from './Search';

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        flexWrap: 'wrap',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        pt: 1.5,
      }}
      spacing={2}
      padding={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1, alignItems: 'flex-start' }}>
        {/*<Search />*/}
        <CustomDatePicker />
        <ColorModeIconDropdown />
      </Stack>
    </Stack>
  );
}
