import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button/Button';
import Image from "next/image";
import presentImage from "../images/profileImages/present.png";
import paymentImage from "../images/profileImages/payment.svg";
import { TbVectorTriangle } from 'react-icons/tb';

const meta: Meta<typeof Button> = {
  title: 'Buttons/ProfileButtons',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LoginButton: Story = {
  args: {
    color: 'pink',
    type: 'loginButton',
    children: 'Войти или зарегистрироваться',
  },
};

export const ProfileSertButton: Story = {
  args: {
    color: 'purple',
    type: 'profileSertButton',
    children: [
      <div>Сертификаты и промокоды</div>,
      <div>Активировать</div>
    ]
  },
};

export const ProfilePresentButton: Story = {
  args: {
    color: 'purple',
    type: 'profilePresentButton',
    children: [
      <Image src={presentImage} alt="presentButton"></Image>,
      <div>Подарите подписку близким</div>
    ]
  },
};

export const ProfileInviteButton: Story = {
  args: {
    color: 'purple',
    type: 'profileInviteButton',
    children: [
      <div><TbVectorTriangle /></div>,
      <div>Пригласить друзей</div>
    ]
  },
};

export const ProfileMenuButton: Story = {
  args: {
    color: 'purple',
    type: 'profileMenuButton',
    children: [
      <Image src={paymentImage} alt="payment"></Image>,
      <div>Покупки</div>
    ]
  },
};

