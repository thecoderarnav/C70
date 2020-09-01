import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import* as Permissions from 'expo-permissions';
import{BarCodeScannner}from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'

 
        }
    }
    getCameraPermissions = async()=>{
        const {status}= await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: status==='granted',
            buttonState:'clicked'
        })
    }
    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;

if(buttonState==='clicked'&& hasCameraPermissions){
        return(
            <BarCodeScannner
            onBarCodeScanned = {scanned?undefined:this.handleBarCodeScanned}
            style = {StyleSheet.absoluteFillObject}
            ></BarCodeScannner>
        )
        }
        
        else if(buttonState=== 'normal'){
<View style = {styles.container}> 
            <Text style = {styles.displayText}>{
                hasCameraPermissions===true?this.state.scannedData:'Request Camera Permissions'
            }
            </Text>
            <TouchableOpacity 
            onPress = {this.getCameraPermissions}
            style = {styles.scanButton}>
            <Text styles = {styles.buttonText}>Scan QR Code</Text>
            </TouchableOpacity>
            </View>
        
    }
        }
            
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent: 'center', 
        alignItems:'center',
        
    },
    displayText:{
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    scanButton:{
        backgroundColor:"black",
        margin: 10,
        padding: 10
    
    },
    buttonText:{
        fontSize:20
    }

        
    
})




