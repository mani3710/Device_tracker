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
width: 100%;
margin-top:  ${Mixins.verticalScaleSize(10)}px;
margin-right: ${Mixins.scaleSize(16)}px;
margin-left: ${Mixins.scaleSize(16)}px;

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
