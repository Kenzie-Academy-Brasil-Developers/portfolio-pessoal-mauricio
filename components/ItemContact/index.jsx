import React from 'react'
import { Item, Icon, Text, } from './style'

export default function ItemContact({ IconFa, LinkContact, name }) {
  const isEmail = LinkContact.includes('@');
  return (
    <Item>
      <Icon>
        <IconFa />
      </Icon>
      <Text>
      {isEmail ? (
          <a href={`mailto:${LinkContact}`}>{LinkContact}</a>
        ) : (
          <a href={LinkContact} target="_blank" rel="noopener noreferrer">{name}</a>
        )}
      </Text>
    </Item>
  )
}
