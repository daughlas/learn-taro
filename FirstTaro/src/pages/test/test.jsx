import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text } from '@tarojs/components'
import testImage from '../../images/test.jpg'
import './test.styl'

export default class Test extends Component {

  config = {
    navigationBarTitleText: '测试页面'
  }

  state = {
    list: [
      {id: 1, name: '测试1'},
      {id: 2, name: '测试2'},
      {id: 3, name: '测试3'},
      {id: 4, name: '测试4'},
      {id: 5, name: '测试5'},
      {id: 6, name: '测试6'},
      {id: 7, name: '测试7'},
      {id: 8, name: '测试8'},
    ]
  }

  clickHandle() {
    Taro.redirectTo({
      url: '/pages/index/index?name=王五'
    })
  }

  render () {
    let {list} = this.state
    return (
      <View className='index'>
        我是 Test 组件
        <Image className='img' src={require('../../images/test.jpg')} />
        <Image className='img' src={testImage} />
        {
          list.map((item) =>(
            <View key={item.id}>
              <Text>{item.name}</Text>
            </View>
          ))
        }

        {
          true ? <Button onClick={this.clickHandle}>跳转</Button> : null
        }
        {
          true || <Button onClick={this.clickHandle}>跳转</Button>
        }

      </View>
    )
  }
}
