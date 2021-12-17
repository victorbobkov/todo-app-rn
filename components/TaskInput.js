import React, {useState} from 'react'
import {StyleSheet, Button, TextInput, View} from 'react-native'

const TaskInput = (props) => {
   const [enteredTask, setEnteredTask] = useState('')

   const taskInputHandler = (enteredText) => {
      setEnteredTask(enteredText)
   }

   return (
      <View style={styles.inputContainer}>
         <TextInput
            placeholder="Добавить задачу"
            style={styles.input}
            onChangeText={taskInputHandler}
            value={enteredTask}
         />
         <Button title="ADD" onPress={props.onAddTask.bind(this, enteredTask)}/>
      </View>
   )
}

const styles = StyleSheet.create({
   inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   input: {
      width: '80%',
      borderColor: '#d3d3d3',
      borderWidth: 1,
      padding: 10
   },
})

export default TaskInput