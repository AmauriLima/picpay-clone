import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 38px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled(Title)``;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  width: 150px;
  height: 45px;
  border-radius: 25px;
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  background: #1c1c1e;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 15px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const CardInfo = styled.Text`
  color: #fffa;
  margin-top: 15px;
  font-size: 14px;
`;

export const Img = styled.Image`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const AddLabel = styled.Text`
  color: #0db060;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;

export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
  margin: 0 auto;
  margin-top: 25px;
`;

export const UseTicketLabel = styled(AddLabel)`
  font-size: 16px;
  text-decoration: underline;
`;
