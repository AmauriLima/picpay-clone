import React from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  Bold,
  Value,
  BalanceContainer,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
} from './styles';

export default function Wallet() {
  return (
    <Wrapper>
      <Header colors={['#52E78C', '#1AB563']}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$
              {' '}
              <Bold>0,00</Bold>
            </Value>

            <EyeButton>
              <Feather name="eye" color="#fff" size={28} />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" color="#fff" size={28} />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" color="#fff" size={20} />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
    </Wrapper>
  );
}
