import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.styl'
import Child from './child'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    name: '张三'
  }

  componentWillMount () {
    console.log('componentWillMount');
    console.log(this.$router.params.name)
  }

  componentDidMount () {
    console.log('componentDidMount');
    this.setState({
      name: '李四'
    }, function() {
      console.log(this.state.name)
    })
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render () {
    return (
      <View className='index'>
        <Child name={this.state.name}></Child>
      </View>
    )
  }
}
