import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const TaskItem = (props) => {
  return (
     <View style={styles.listItem}>
       <Text>{props.title}</Text>
     </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f2f2f2',
    borderColor: '#d3d3d3',
    borderWidth: 1
  }
})

export default TaskItem