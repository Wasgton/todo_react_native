import 'react-native-gesture-handler';
import React,{useState, useEffect} from 'react';
import {Text, TextInput, View, Alert, StatusBar, TouchableOpacity, ScrollView, SafeAreaView,ToastAndroid } from 'react-native';
import styles from './styles';
import instance from "../../config/api";

const Edit = ({route,navigation}) => {

    const { itemId } = route.params;
    const [task, setTaskDetails] = useState([]);

    useEffect(()=>{
        getTaskDatails(itemId);
    },[true])

    const getTaskDatails = async (id) =>{
        await instance.get(`task/${id}`)
            .then(function(response){
                if(response.data.status!=='error'){
                    setTaskDetails([response.data])
                }
                return response.data;
            })
            .catch(function(error){
                console.log(error);
                return false;
            });
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.formContainer}>
            {task.map(item=>(
                <View style={styles.inputContainer} key={item.id}>
                <TextInput onChangeText={text=> setTaskDetails(text)}
                           style={styles.input}
                           value={item.description}
                />
                </View>
            ))}
            </View>
        </View>
    );
}

export default Edit;