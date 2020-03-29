import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class Child extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('------')
    console.log(nextProps)
  }
  render() {
    let { name } = this.props
    return (
      <View>
        我是{name}
      </View>
    )
  }
}

Child.defaultProps = {
  obj: {key: [{name: 'aaaa'}]}
}

export default Child;
