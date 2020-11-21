import React,{useState} from 'react';
import {Text, TextInput, View, StatusBar, TouchableOpacity, Pressable, ScrollView, SafeAreaView} from 'react-native';
import styles from './styles';
import {Button} from "react-native-web";

export default function App() {

  const [newTask,setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

    function handleNewTasks(){
      if(newTask.length>0){
          let task = {};
          task.id = Math.floor(Math.random() * new Date());
          task.task = newTask;

          setTasks([...tasks,task]);
          setNewTask('');
      }
    }

    function deleteTask(id){
      let arrTasks = tasks.filter(function(elem,index,array){
        return elem.id !== id;
      });
      setTasks(arrTasks);
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
                      <View style={styles.listItem} key={task.id} >
                          <Text style={styles.task}>{task.task}</Text>
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
