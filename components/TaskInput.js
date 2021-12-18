import React, {useState} from 'react'
import {StyleSheet, Button, TextInput, View, Modal} from 'react-native'

const TaskInput = ({onAddTask, visible, onCancel}) => {
   const [enteredTask, setEnteredTask] = useState('')

   const taskInputHandler = (enteredText) => {
      setEnteredTask(enteredText)
   }

   const addGoalHandler = () => {
      onAddTask(enteredTask)
      setEnteredTask('')
   }

   return (
      <Modal visible={visible} animationType='slide'>
         <View style={styles.inputContainer}>
            <TextInput
               placeholder='Добавить задачу'
               style={styles.input}
               onChangeText={taskInputHandler}
               value={enteredTask}
            />
            <View style={styles.buttonContainer}>
               <View style={styles.button}>
                  <Button
                     title='Добавить'
                     onPress={addGoalHandler}
                  />
               </View>
               <View style={styles.buttonContainer}>
                  <Button
                     title='Отменить'
                     onPress={onCancel}
                     color='red'
                  />
               </View>
            </View>
         </View>
      </Modal>
   )
}

const styles = StyleSheet.create({
   inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   input: {
      width: '80%',
      borderColor: '#d3d3d3',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '55%'
   },
   button: {
      width: '50%'
   }
})

export default TaskInput