import { Avatar } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Drawer, { Props as DrawerProps } from "./Drawer";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';

export default {
  title: 'Utils/Drawer',
  component: Drawer,
  decorators: [],
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args: DrawerProps) => (
  <Drawer
    open={args.open}
    close={args.close}
    hide={args.hide}
  >
    {args.children}
  </Drawer>);

export const AvatarDrawer = Template.bind({});
AvatarDrawer.args = {
  open: <Avatar sx={{ fontSize: '0.85rem' }}>Open</Avatar>,
  close: <Avatar sx={{ fontSize: '0.85rem' }}>Close</Avatar>,
  hide: false,
  children: <p>Hello drawer !</p>
}

export const MenuIconDrawer = Template.bind({});
MenuIconDrawer.args = {
  open: <MenuOpenIcon sx={{ fontSize: '0.85rem' }} />,
  close: <MenuIcon sx={{ fontSize: '0.85rem' }} />,
  hide: false,
  children: <p>Hello drawer !</p>
}
