import React from 'react';
import { Avatar } from 'antd';
import avatarImg from '../assets/avatar.jpg';

const UserAvatar = () => (
  <div className="avatar">
    <Avatar size={100} src={avatarImg} />
  </div>
);

export default UserAvatar;
