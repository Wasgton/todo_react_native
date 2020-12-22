import 'react-native-gesture-handler';
import React,{useState, useEffect} from 'react';
import {Text, TextInput, View, StatusBar, TouchableOpacity, ScrollView, SafeAreaView,ToastAndroid } from 'react-native';
import styles from './styles';
import instance from "../../config/api";

const Home = ({navigation}) => {

    const [newTask,setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        getTasksDb();
    },[true]);

    function handleNewTasks(){
        if(newTask.length>0){
            setTaskDB(newTask)
                .then(
                    setNewTask('')
                )
                .catch(
                    console.log('erro')
                );
        }
    }

    function deleteTask(id){
        if(deleteTaskDB(id)){
            let arrTasks = tasks.filter(function(elem,index,array){
                return elem.id !== id;
            });

            setTasks(arrTasks);
        }
    }

    const getTasksDb = async () =>{
        await instance.get('/task')
            .then(function(response){
               if(response.data.status!=='error'){
                   console.log(response)
                    setTasks(response.data)
                }
                return response;
            })
            .catch(function(error){
                console.log(error);
                return false;
            });
    }

    const setTaskDB = async (task) =>{
        await instance.post('task/',{data:task})
            .then(function (response){

                if(response.data.status==='error'){
                    ToastAndroid.showWithGravity(
                        "Erro ao se conectar",
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
                    return false;
                }
                if(response.statusText === 'Created'){
                    setTasks([...tasks,response.data]);
                }

            })
            .catch(function (error){
                console.log(error);
                return false;
            })
            .then(function (){

            })
    }

    const deleteTaskDB = async (id) =>{
        await instance.delete('task/'+id)
            .then(function (response){
                if(response.statusText === 'Created'){
                    return true;
                }
            })
            .catch(function (error){
                console.log(error);
                return false;
            })
            .then(function (){

            })
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Tarefas</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={text=> setNewTask(text)}
                               style={styles.input}
                               value={newTask}
                               placeholder="Type your task"
                    />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{handleNewTasks()}}
                    >
                        <Text style={styles.buttonText}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.taskContainer}>
                <SafeAreaView>
                    <ScrollView>
                        {tasks.map(task=>(
                            <View style={styles.listItem} key={task.id}>
                                <TouchableOpacity style={styles.task} onPress={()=>{navigation.navigate('Edit',{itemId:task.id});}}>
                                    <Text style={styles.task}>{task.description}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.deleteButton} onPress={()=>deleteTask(task.id)} >
                                    <Text style={styles.deleteButtonText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                </SafeAreaView>
            </View>
            <StatusBar backgroundColor="black" StatusBarStyle="dark-content"/>
        </View>
    );
}

export default Home;