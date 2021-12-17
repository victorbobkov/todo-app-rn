import React, {useState} from 'react'
import {
   StyleSheet,
   Button,
   Text,
   TextInput,
   View,
   ScrollView,
   FlatList
} from 'react-native'

export default function App() {
   const [enteredTask, setEnteredTask] = useState('')
   const [tasks, setTasks] = useState([])

   const goalInputHandler = (enteredText) => {
      setEnteredTask(enteredText)
   }
   
   const addGoalHandler = () => {
      setTasks(currentTasks => [...currentTasks, {key: Math.random().toString(), value: enteredTask}])
   }

   return (
      <View style={styles.screen}>
         <View style={styles.inputContainer}>
            <TextInput
               placeholder="Добавить задачу"
               style={styles.input}
               onChangeText={goalInputHandler}
               value={enteredTask}
            />
            <Button title="ADD" onPress={addGoalHandler} />
         </View>
         <FlatList
            data={tasks}
            renderItem={itemData => (
               <View style={styles.listItem}>
                  <Text>{itemData.item.value}</Text>
               </View>
            )}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      padding: 50
   },
   inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10
   },
   listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
   }
})