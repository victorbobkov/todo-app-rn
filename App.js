import React, {useState} from 'react'
import TaskItem from './components/TaskItem'
import TaskInput from './components/TaskInput'
import {
   StyleSheet,
   View,
   Button,
   FlatList
} from 'react-native'

export default function App() {
   const [tasks, setTasks] = useState([])
   const [isAddMode, setIsAddMode] = useState(false)

   const addTaskHandler = (taskTitle) => {
      setTasks(currentTasks => [
         ...currentTasks,
         {id: Math.random().toString(), value: taskTitle}])
      setIsAddMode(false)
   }

   const removeTaskHandler = (taskId) => {
     setTasks(currentTasks => {
        return currentTasks.filter((task) => task.id !== taskId)
     })
   }

   const cancelTaskAdditionHandler = () => {
     setIsAddMode(false)
   }

   return (
      <View style={styles.screen}>
         <Button
            title='Добавить новую задачу'
            onPress={() => setIsAddMode(true)}
         />
         <TaskInput
            visible={isAddMode}
            onAddTask={addTaskHandler}
            onCancel={cancelTaskAdditionHandler}
         />
         <FlatList
            keyExtractor={(item, index) => item.id}
            data={tasks}
            renderItem={itemData => (
               <TaskItem
                  id={itemData.item.id}
                  onDelete={removeTaskHandler}
                  title={itemData.item.value}
               />
            )}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      padding: 50
   }
})