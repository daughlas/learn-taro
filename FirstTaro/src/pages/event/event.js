import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

const name = process.env.TARO_ENV
export default class Event extends Component {
  state = {
    name: '张三'
  }
  componentWillMount() {
    console.log(name)
  }
  test(e) {
    console.log(this.state.name)
    e.stopPropagation()
  }

  testOut = () => {
    console.log('我是外面的回调')
  }

  render() {
    return (
      <View className='index' onClick={this.testOut}>
        <Button onClick={this.test}>测试事件</Button>
      </View>
    )
  }
}
