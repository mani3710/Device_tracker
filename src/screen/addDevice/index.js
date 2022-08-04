import React, { useState } from "react";
import { Text, View, FlatList, TextInput } from 'react-native';
import { useTheme } from '../../contexts';
import { toggleThemeModeInLocalStorage } from '../../redux/reducers/dataReducer';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    TitleText,
    RowContainer,
    AppTextInput,
    ScrollableContainer,
    TextInputCaption
} from './styled';
import { Switch, Card, Icon, Button } from 'react-native-elements';
import * as Route from '../../navigation/route';
import { addDeviceInformation } from '../../redux/reducers/dataReducer';
import Toast from 'react-native-simple-toast'
const AddDeviceScreen = (props) => {
    const dispatch = useDispatch();
    const { theme, toggleTheme, isDark } = useTheme();
    const DeviceInformationStore = useSelector(state => state.data);
    const {
        deviceInformation
    } = DeviceInformationStore;
    const [modelName, setModelName] = useState("");
    const [note, setNote] = useState("");
    const [os, setOs] = useState("");
    const [ownerName, setOwnerName] = useState("");
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
                    <TitleText >Add device</TitleText>

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
                <Button
                    onPress={() => {
                        if (enableButton()) {
                            dispatch(addDeviceInformation({ model: modelName, os: os, ownerName: ownerName, note: note }));
                            Toast.show("Successfully device added")
                            props.navigation.goBack();
                        }

                    }

                    }
                    buttonStyle={{ backgroundColor: enableButton() ? "#521e69" : "gray", marginTop: 40, width: "86%", alignSelf: "center", opacity: enableButton() ? 1 : 0.4 }}
                    title={"ADD"} />









            </ScrollableContainer>

        </Container>
    );
}

export default AddDeviceScreen;                 