import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button/Button';
import { HiOutlinePhone } from "react-icons/hi";
import { FaApple, FaTelegramPlane } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { BsTvFill } from "react-icons/bs";

const meta: Meta<typeof Button> = {
  title: 'Buttons/FooterButtons',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ChatButton: Story = {
  args: {
    color: 'purple',
    type: 'chatButton',
    children: 'Написать в чате',
  },
};

export const FooterIconButton: Story = {
  args: {
    color: 'purple',
    type: 'footerIconButton',
    children: <HiOutlinePhone />,
  },
};

export const FooterStoresButton: Story = {
  args: {
    color: 'purple',
    type: 'footerStoresButton',
    children: [
      <FaApple key={1} />,
      <div key={2}>
        <span>Загрузить в</span>
        <div>App Store</div>
      </div>
    ]
  },
};

export const SocialButton: Story = {
  args: {
    color: 'purple',
    type: 'socialButton',
    children: <FaTelegramPlane />
  },
};

export const SubscribeButton: Story = {
  args: {
    color: 'purple',
    type: 'subscribeButton',
    width: '300px',
    children: [
      <IoDiamondOutline />,
      'Подключить подписку'
    ]
  },
};

export const DeviceButton: Story = {
  args: {
    color: 'purple',
    type: 'deviceButton',
    width: '300px',
    children: [
      <BsTvFill />,
      <div>
        <span>Смотрите на</span>
        <div>Smart TV</div>
      </div>
    ]
  },
};

