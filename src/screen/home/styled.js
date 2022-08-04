import styled from 'styled-components/native';
import { Mixins } from '../../styles';

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.backgroundColor};
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
justify-content: flex-end;
margin-top:  ${Mixins.verticalScaleSize(10)}px;
margin-right: ${Mixins.scaleSize(10)}px;

`;

export const LabelCaptionText = styled.Text`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${Mixins.scaleFont(14)}px;
 
`;

export const DeviceList = styled.FlatList`

  flex: 1;
  padding-top: 15px;
`;

export const AddIconText = styled.Text`
  color: #fff;
  font-size: ${Mixins.scaleFont(25)}px;
  font-weight: bold;

`;

export const TouchableOpacityContainer = styled.TouchableOpacity`
flex: 1;
justify-content: center;
align-items: center;
 
`;

export const DeviceItemContainer = styled.View`

`;

export const DeviceContentContainer = styled.View`
   /* color: ${(props) => props.theme.colors.tinyTextColor};
  font-size: ${Mixins.scaleFont(18)}px; */
  flex-direction: row;
  margin-top: ${Mixins.scaleFont(10)}px;
`;

export const DeviceContentLabel = styled.Text`
   color: ${(props) => props.theme.colors.tinyTextColor};
  font-size: ${Mixins.scaleFont(12)}px;
  width: ${Mixins.scaleSize(100)}px;

`;
export const Colon= styled.Text`
color: ${(props) => props.theme.colors.textColor};
font-size: ${Mixins.scaleFont(12)}px;

`;

export const DeviceContentValue = styled.Text`
   color: ${(props) => props.theme.colors.textColor};
  font-size: ${Mixins.scaleFont(12)}px;
  flex: 1;
  padding-left: 5px;
  line-height: ${Mixins.verticalScaleSize(19)}px;
`;

export const NoteLabel = styled.Text`
   color: ${(props) => props.theme.colors.textColor};
  font-size: ${Mixins.scaleFont(12)}px;
  width: ${Mixins.scaleSize(100)}px;
  margin-top: ${Mixins.verticalScaleSize(15)}px;

`;

export const DeviceNoteValue = styled.Text`
   color: ${(props) => props.theme.colors.textColor};
  font-size: ${Mixins.scaleFont(12)}px;
  flex: 1;
  padding-left: 10px;
  line-height: ${Mixins.verticalScaleSize(19)}px;
  opacity: 0.6;
  padding-right: 10px;
  margin-top: ${Mixins.verticalScaleSize(8)}px;
`;

export const EditContainer = styled.TouchableOpacity`
background-color: rgba(182, 8, 255, 0.18);
width: 80px;
height: 40px;
align-self: center;
justify-content: center;
align-items: center;
flex-direction: row;
border-radius: 10px;
margin-top: 20px;
`;

export const ExitText = styled.Text`
   color: ${(props) => props.theme.colors.textColor};
  font-size: ${Mixins.scaleFont(15)}px;
  
`;

export const EmptyViewContainer = styled.View`

`;

export const NoDataFound = styled.Text`
   color: gray;
  font-size: ${Mixins.scaleFont(15)}px;
  align-self: center;
  font-weight: bold;
  margin-top:${Mixins.verticalScaleSize(15)}px ;
  
`;



export const QRContainer = styled.TouchableOpacity`
flex-direction: row;
width: 100%;
justify-content: flex-end;
margin-top:  ${Mixins.verticalScaleSize(10)}px;
margin-right: ${Mixins.scaleSize(10)}px;

`;


export const ShowQRLabel = styled.Text`
   color: ${(props) => props.theme.colors.tinyTextColor};
  font-size: ${Mixins.scaleFont(12)}px;
 

`;

export const QRViewContainer = styled.View`
align-self: center;
`;