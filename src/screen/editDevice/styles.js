import styled from 'styled-components/native';
import { Mixins } from '../../styles';

export const Container = styled.KeyboardAvoidingView`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  flex: 1;
`;
export const ScrollableContainer = styled.ScrollView`
 
  flex: 1;
`;

export const TitleText = styled.Text`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${Mixins.scaleFont(18)}px;
  font-weight: bold;
  align-self: center;
  margin-top: ${Mixins.verticalScaleSize(10)}px;
`;

export const RowContainer = styled.View`
flex-direction: row;

margin-top:  ${Mixins.verticalScaleSize(10)}px;
margin-right: ${Mixins.scaleSize(16)}px;
margin-left: ${Mixins.scaleSize(16)}px;
align-self: center;

`;

export const AppTextInput = styled.TextInput`
  width: 86%;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  align-self: center;
  color: ${(props) => props.theme.colors.textColor};
`;

export const TextInputCaption = styled.Text`
  color: #808080;
  font-size: ${Mixins.scaleFont(13)}px;
  margin-top: ${Mixins.verticalScaleSize(15)}px;
  margin-left: ${Mixins.scaleSize(28)}px;
`;

export const DeleteContainer = styled.TouchableOpacity`
background-color: rgba(255, 0, 0, 0.18);
width: 70%;
height: 40px;
align-self: center;
justify-content: center;
align-items: center;
flex-direction: row;
border-radius: 10px;
margin-top: 20px;
`;

export const DeleteText = styled.Text`
   color: ${(props) => props.theme.colors.textColor};
  font-size: ${Mixins.scaleFont(15)}px;
  
`;


export const DialogTitleText = styled.Text`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${Mixins.scaleFont(18)}px;
  font-weight: bold;
  align-self: center;
  margin-top: ${Mixins.verticalScaleSize(10)}px;
`;

export const QuoteTitle = styled.Text`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${Mixins.scaleFont(15)}px;
  font-weight: bold;
  align-self: center;
  margin-top: ${Mixins.verticalScaleSize(10)}px;
  text-align: center;
`;
export const QuoteAuthor = styled.Text`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${Mixins.scaleFont(12)}px;
  font-weight: bold;
  align-self: center;
  margin-top: ${Mixins.verticalScaleSize(10)}px;
  opacity: 0.3;
  align-self: flex-end;
`;