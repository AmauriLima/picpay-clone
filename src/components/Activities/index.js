import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Actions,
  Avatar,
  Bold,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Date,
  Description,
  Details,
  Divider,
  Header,
  Option,
  Optionlabel,
  Title,
  UserName,
  Value,
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold>
            {' pagou a '}
            <Bold>@maateusilva</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Mateus Silva</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>
            <Divider />

            <Feather name="lock" color="#fff" size={14} />
            <Date>há 2 anos</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" color="#fff" size={14} />
              <Optionlabel>0</Optionlabel>
            </Option>

            <Option>
              <AntDesign name="hearto" color="#fff" size={14} />
              <Optionlabel>0</Optionlabel>
            </Option>
          </Actions>

        </CardFooter>
      </Card>
    </Container>
  );
}
