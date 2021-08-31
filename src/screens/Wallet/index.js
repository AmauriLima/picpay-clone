import React, { useState } from 'react';
import { Switch } from 'react-native';
import {
  Feather, MaterialCommunityIcons, FontAwesome, AntDesign,
} from '@expo/vector-icons';

import {
  Card,
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  Bold,
  Value,
  BalanceContainer,
  EyeButton,
  Img,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  CardDetails,
  CardTitle,
  CardInfo,
  CardBody,
  AddButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(false);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => (!prevState));
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => (!prevState));
  }

  return (
    <Wrapper>
      <Header
        colors={
          useBalance
            ? ['#52E78C', '#1AB563']
            : ['#d3d3d3', '#868686']
        }
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$
              {' '}
              <Bold>{isVisible ? '0,00' : '----' }</Bold>
            </Value>

            <EyeButton onPress={handleToggleVisibility}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} color="#fff" size={28} />
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

      <UseBalance>
        <UseBalanceTitle>
          Usar saldo ao pagar
        </UseBalanceTitle>
        <Switch
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Forma de pagamento
        </PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre um cartão de crédito para poder fazer pagamentos mesmo
                quando não tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
          </CardBody>

          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0db060" />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>

        <UseTicketButton>
          <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
          <UseTicketLabel>
            Usar código promocional
          </UseTicketLabel>
        </UseTicketButton>
      </PaymentMethods>
    </Wrapper>
  );
}
