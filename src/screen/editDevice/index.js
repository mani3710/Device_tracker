import React, { useState,useEffect } from "react";
import { Text, View, FlatList, TextInput } from 'react-native';
import { useTheme } from '../../contexts';
import { toggleThemeModeInLocalStorage,updateDeviceInformation } from '../../redux/reducers/dataReducer';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    TitleText,
    RowContainer,
    AppTextInput,
    ScrollableContainer,
    TextInputCaption   ,
    DeleteContainer,
    DeleteText,
    DialogTitleText,
    QuoteTitle,
    QuoteAuthor

} from './styles';
import { Switch, Card, Icon, Button } from 'react-native-elements';
import * as Route from '../../navigation/route';
import { addDeviceInformation,removeDevice,getQuoteOfTheDay } from '../../redux/reducers/dataReducer';
import Toast from 'react-native-simple-toast';
import {Dialog} from 'react-native-simple-dialogs'

const EditDeviceScreen = (props) => {
    const dispatch = useDispatch();
    const { theme, toggleTheme, isDark } = useTheme();
    useEffect(()=>{
dispatch(getQuoteOfTheDay());
    },[])
    const DeviceInformationStore = useSelector(state => state.data);
    const {
        deviceInformation,
        selectedDeviceForEdit,
        selectedDeviceIndex,
        quoteInformation
    } = DeviceInformationStore;
    const [modelName, setModelName] = useState(selectedDeviceForEdit.model);
    const [note, setNote] = useState(selectedDeviceForEdit.note);
    const [os, setOs] = useState(selectedDeviceForEdit.os);
    const [ownerName, setOwnerName] = useState(selectedDeviceForEdit.ownerName);
    const [shoWDeleteWarningDialog, setShoWDeleteWarningDialog] = useState(false);
    const [showQuoteDialog, setShowQuoteDialog] = useState(false);
    const enableButton = () => {
        if (modelName && note && os && ownerName) {
            return true;
        }
        return false;
    }
    return (

        <Container
        >
            <ScrollableContainer>
                <RowContainer>
                    <Icon
                        // 
                        name="arrow-back" size={25} color={theme.colors.textColor} containerStyle={{ marginTop: 10, marginRight: 10 }}
                        onPress={() => { props.navigation.goBack() }}
                    />
                    <TitleText >Edit device</TitleText>

                </RowContainer>
                <TextInputCaption>Model</TextInputCaption>
                <AppTextInput
                    value={modelName}
                    onChangeText={(text) => { setModelName(text) }}
                    placeholder="Enter device name"
                    placeholderTextColor={theme.colors.tinyTextColor}
                />

                <TextInputCaption>OS</TextInputCaption>
                <AppTextInput
                    value={os}
                    onChangeText={(text) => { setOs(text) }}
                    placeholder="Enter OS"
                    placeholderTextColor={theme.colors.tinyTextColor}
                />

                <TextInputCaption>Owner name</TextInputCaption>
                <AppTextInput
                    value={ownerName}
                    onChangeText={(text) => { setOwnerName(text) }}
                    placeholder="Enter owner nam"
                    placeholderTextColor={theme.colors.tinyTextColor}
                />

                <TextInputCaption>Note</TextInputCaption>
                <AppTextInput
                    value={note}
                    onChangeText={(text) => { setNote(text) }}
                    placeholder="Enter Note"
                    placeholderTextColor={theme.colors.tinyTextColor}
                />
                <DeleteContainer 
                onPress={()=>{ setShoWDeleteWarningDialog(true)}}>
                <Icon
                                        // 
                                        name="delete" size={15} color={theme.colors.textColor} containerStyle={{  marginRight: 6 }}
                                       
                                    />
                                    <DeleteText>DELETE</DeleteText>

                </DeleteContainer>
                <Button
                    onPress={() => {
                        if (enableButton()) {
                            dispatch(updateDeviceInformation({ item :{model: modelName, os: os, ownerName: ownerName, note: note},index: selectedDeviceIndex}));
                            Toast.show("Updated device successfully")
                            props.navigation.goBack();
                        }

                    }

                    }
                    buttonStyle={{ backgroundColor: enableButton() ? "#521e69" : "gray", marginTop: 40, width: "86%", alignSelf: "center", opacity: enableButton() ? 1 : 0.4 }}
                    title={"EDIT"} />



            </ScrollableContainer>

            <Dialog
             visible={shoWDeleteWarningDialog}
             contentStyle={{backgroundColor:isDark ? "#000":"#fff",borderRadius:10}}
             dialogStyle={{backgroundColor:isDark ? "#000":"#fff",elevation:20,borderRadius:10}}
             onTouchOutside={()=>{setShoWDeleteWarningDialog(false)}}
            >
                <DialogTitleText>Do you want to delete ?</DialogTitleText>
                <RowContainer>
                <Button
                    onPress={() => {  
                        setShoWDeleteWarningDialog(false)
                    }

                    }
                    buttonStyle={{ backgroundColor:  "red" , marginTop: 40, width: "86%", alignSelf: "center"}}
                    title={"NO"} />
                <Button
                    onPress={() => {
                      
                       setShoWDeleteWarningDialog(false);
                       dispatch(removeDevice(selectedDeviceIndex));
                       setShowQuoteDialog(true);
                       Toast.show("Deleted successfully!")

                    }

                    }
                    buttonStyle={{ backgroundColor:  "#521e69" , marginTop: 40, width: "86%", alignSelf: "center" }}
                    title={"YES"} />
                </RowContainer>
               

                

            </Dialog>  



            <Dialog
             visible={showQuoteDialog}
             contentStyle={{backgroundColor:isDark ? "#000":"#fff",borderRadius:10}}
             dialogStyle={{backgroundColor:isDark ? "#000":"#fff",elevation:20,borderRadius:10}}
            
            >
                <QuoteTitle>{quoteInformation.q}</QuoteTitle>
                <QuoteAuthor>{quoteInformation.a}</QuoteAuthor>
                <RowContainer>
                <Button
                    onPress={() => {
                      
                       setShowQuoteDialog(false);
    
                       props.navigation.goBack();

                    }

                    }
                    buttonStyle={{ backgroundColor:  "#521e69" , marginTop: 40, width: "86%", alignSelf: "center"}}
                    title={"CLOSE"} />
                </RowContainer>
               

                

            </Dialog>  

        </Container>
    );
}

export default EditDeviceScreen;                 