import React from 'react';
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: '#6548A3',
        flex: 1,
        padding:10,
    },
    topContainer:{
        padding:30,
        flex: 1,
        minHeight:50,
        maxHeight:150,
    },
    title:{
        fontSize:50,
        color:'#F0EDF5',
        textAlign:'center',
    },
    formContainer:{
        flex:1,
        maxHeight:56,
        flexDirection:'row',
        paddingStart:20,
        paddingEnd:20,
    },
    inputContainer:{
        flex:1,
        height:50,
        minWidth:200,
        borderBottomLeftRadius:15,
        borderTopLeftRadius:15,
        backgroundColor: '#FFFFFF',
        paddingStart:20,
    },
    input:{
        flex:1,
        height:'100%',
        fontSize:15,
    },
    btnContainer:{
        flex:1,
        position:'relative',
        height:50,
        borderBottomRightRadius:15,
        borderTopRightRadius:15,
        backgroundColor:'#04d361',
        alignItems:'center',
        maxWidth:80,
    },
    button:{
        flex:1,
        height:'100%',
        width:'100%',
        justifyContent:'center',
        textAlign: 'center',
    },
    buttonText:{
        fontSize:17,
        textAlign:'center',
    },
    taskContainer:{
        flex:3,
        marginTop:30,
        position:'relative',
    },
    scrollview:{
        flex:1,
        marginTop:30,
        marginBottom:30,
    },
    listItem:{
        backgroundColor:'white',
        padding:15,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginTop:5,
        flexDirection: 'row',
    },
    task:{
        fontSize:20,
        color:'#636262',
        width: '70%',
    },
    deleteButton:{
        flex:1,
        height:'100%',
        textAlign: 'center',

        position:'relative',
        alignItems:'center',
        marginLeft:10,
        borderLeftWidth:1,
        borderLeftColor:'red',
    },
    deleteButtonText:{
        color:'red',
    }
});

export default styles;