import React from 'react'
import { Image } from 'semantic-ui-react'
import avatar from '../photos/jk_profile_pic.jpg'

const Avatar = () => (
  <div>
    <Image src={avatar} avatar />
    <span>Username</span>
  </div>
)

export default Avatar
