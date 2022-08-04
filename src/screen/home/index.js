import React, { useState } from "react";
import { Text, View, FlatList, Image, PermissionsAndroid, Alert } from 'react-native';
import { useTheme } from '../../contexts';
import { toggleThemeModeInLocalStorage, setSelectedDeviceForEdit } from '../../redux/reducers/dataReducer';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    TitleText,
    RowContainer,
    LabelCaptionText,
    DeviceList,
    AddIconText,
    TouchableOpacityContainer,
    DeviceItemContainer,
    DeviceContentLabel,
    DeviceContentContainer,
    DeviceContentValue,
    Colon,
    NoteLabel,
    DeviceNoteValue,
    EditContainer,
    ExitText,
    EmptyViewContainer,
    NoDataFound,
    QRContainer,
    ShowQRLabel,
    QRViewContainer
} from './styled';
import { Switch, Card, Icon, Button } from 'react-native-elements';
import * as Route from '../../navigation/route';

import { writeFile, readFile, downloadFile, DownloadDirectoryPath } from 'react-native-fs';
import XLSX from 'xlsx';
import QRCode from 'react-native-qrcode-svg';
import { Dialog } from 'react-native-simple-dialogs'



const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const { theme, toggleTheme, isDark } = useTheme();
    const DeviceInformationStore = useSelector(state => state.data);
    const {
        deviceInformation
    } = DeviceInformationStore;

    const [showQR, setShowQR] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const exportCsv = () => {
        let wb = XLSX.utils.book_new();
        let we = XLSX.utils.json_to_sheet(deviceInformation);
        XLSX.utils.book_append_sheet(wb, we, "users");
        const wabout = XLSX.write(wb, { type: "binary", bookType: 'xlsx' });

        writeFile(
            DownloadDirectoryPath + `/DeviceData(${Math.floor(Date.now() / 1000)}).csv`,
            wabout,
            'ascii'
        ).then(res => {
            alert(`Export Data Successfully path : ${DownloadDirectoryPath}/DeviceData(${Math.floor(Date.now() / 1000)}).csv`);
        }).catch(e => {
            console.log(e)
            alert('Can be export');
        })
    }
    const exportDAta = async () => {
        console.log("export")
        try {
            let isPermitted = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            );
            console.log("isPermitted", isPermitted)
            if (!isPermitted) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                    title: "Storage permission needed",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
                );
                console.log("granted",granted);
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("granted");
                    exportCsv();

                } else {
                    console.log("no permission")
                }
            } else {
                exportCsv();    
            }
        } catch (e) {
            console.log("error", e);
        }
    }

    return (

        <Container
        >
            <TitleText >DEVICE TRACKER</TitleText>
            <RowContainer>
                <LabelCaptionText>DARK THEAME</LabelCaptionText>
                <Switch
                    value={isDark}
                    onValueChange={() => toggleTheme()}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                />
            </RowContainer>
            <FlatList
                ListFooterComponent={() => {
                    return (
                        <View style={{ height: 30 }}></View>
                    );
                }}
                ListEmptyComponent={() => {
                    return (
                        <EmptyViewContainer>
                            <NoDataFound>No Data Found</NoDataFound>

                        </EmptyViewContainer>
                    );
                }}

                data={deviceInformation}
                renderItem={({ item, index }) => {
                    return (
                        <Card
                            containerStyle={{
                                backgroundColor: isDark ? "#000" : "#fff",
                                borderWidth: 0,
                                elevation: 2,
                                marginBottom: 20,

                            }}
                        >
                            <DeviceItemContainer>
                                <QRContainer
                                    onPress={() => {
                                        setSelectedItem(item)
                                        setShowQR(true)
                                    }}
                                >
                                    <ShowQRLabel
                                        selectable={false}
                                    >Show QR</ShowQRLabel>
                                    <Icon
                                        // 
                                        name="qr-code-2" size={15} color={theme.colors.textColor}
                                        containerStyle={{ marginLeft: 5 }}

                                    />
                                </QRContainer>

                                <DeviceContentContainer>
                                    <DeviceContentLabel>Owner Name </DeviceContentLabel>
                                    <Colon>:</Colon>
                                    <DeviceContentValue>{item.ownerName}</DeviceContentValue>
                                </DeviceContentContainer>
                                <DeviceContentContainer>
                                    <DeviceContentLabel>Mode </DeviceContentLabel>
                                    <Colon>:</Colon>
                                    <DeviceContentValue>{item.model}</DeviceContentValue>
                                </DeviceContentContainer>
                                <DeviceContentContainer>
                                    <DeviceContentLabel>OS </DeviceContentLabel>
                                    <Colon>:</Colon>
                                    <DeviceContentValue>{item.os}</DeviceContentValue>
                                </DeviceContentContainer>
                                <NoteLabel>Notes </NoteLabel>
                                <DeviceNoteValue >{item.note}

                                </DeviceNoteValue>
                                <EditContainer onPress={() => {

                                    dispatch(setSelectedDeviceForEdit({ item: item, index: index }));
                                    props.navigation.navigate(Route.EDIT_DEVICE_SCREEN)
                                }}>
                                    <Icon
                                        // 
                                        name="edit" size={15} color={theme.colors.textColor} containerStyle={{ marginRight: 6 }}

                                    />

                                    <ExitText>Edit</ExitText>
                                </EditContainer>
                            </DeviceItemContainer>


                        </Card>
                    );
                }}
            />
            {deviceInformation.length ? <Button
                onPress={() => {
                    exportDAta();

                }

                }
                buttonStyle={{ backgroundColor: "#521e69", marginTop: 40, width: "86%", alignSelf: "center", marginBottom: 20 }}
                title={"EXPORT"} /> :null}
           
            <Card
                containerStyle={{
                    backgroundColor: "#521e69", width: 60, height: 60, borderRadius: 150 / 2, position: "absolute", bottom: 50, right: 20, padding: 0, borderWidth: 0,
                    justifyContent: "center", alignItems: "center"
                }}
            >
                <TouchableOpacityContainer onPress={() => {
                    //exportDAta()
                    props.navigation.navigate(Route.ADD_DEVICE_SCREEN)
                }}>
                    <AddIconText
                        selectable={false}
                    >+</AddIconText>
                </TouchableOpacityContainer>

            </Card>


            <Dialog
                visible={showQR}
                contentStyle={{ backgroundColor: isDark ? "#000" : "#fff", borderRadius: 10 }}
                dialogStyle={{ backgroundColor: isDark ? "#000" : "#fff", elevation: 20, borderRadius: 10 }}
                onTouchOutside={() => { setShowQR(false) }}
            >
                <QRViewContainer>
                    <QRCode
                        size={250}
                        value={`${JSON.stringify(selectedItem)}`}
                        color="red"
                    />
                </QRViewContainer>



                <Button
                    onPress={() => {

                        setShowQR(false);



                    }

                    }
                    buttonStyle={{ backgroundColor: "#521e69", marginTop: 40, width: "86%", alignSelf: "center" }}
                    title={"CLOSE"} />





            </Dialog>





        </Container>
    );
}

export default HomeScreen;                 