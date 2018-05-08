import React from 'react'
import axios from 'axios'
import { ScrollView } from 'react-native'
import { List, ListItem, CheckBox } from 'react-native-elements'
import Spinner from 'react-native-spinkit'

const range = (start, end, value) => {
  const result = []
  for (let i = start; i < end; i++) result.push(value)
  return result
}

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      todos: null,
      checked: [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/todos')
      .then(res => (
        this.setState({
          todos: res.data.todos,
          checked: range(0, res.data.todos.length, false),
        })
      ))
      .catch(err => alert(err))
    setTimeout(() => this.setState({ loading: false }), 2000)
  }

  onCheck(index) {
    const newChecked = Object.assign([], this.state.checked)
    newChecked[index] = !newChecked[index]
    this.setState({ checked: newChecked, })
  }

  render() {
    const isLoading = this.state.todos === null || this.state.loading
    if (isLoading) return (
      <Spinner
        style={{
          marginTop: 230,
          marginBottom: 50,
          marginLeft: '38%',

        }}
        isVisible={isLoading}
        size={100}
        type={'Wave'}
        color={'#555'}
      />
    )
    return (
      <List>
        {
          this.state.todos.map((todo, index) => (
            <ListItem
              leftIcon={
                <CheckBox
                  containerStyle={{
                    width: 45,
                    height: 45,
                  }}
                  onPress={() => this.onCheck(index)}
                  checked={this.state.checked[index]}
                />
              }
              key={todo.id}
              title={todo.message}
            />
          ))
        }
      </List>
    )
  }
}
