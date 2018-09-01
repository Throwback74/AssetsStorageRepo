import { Component } from 'react';
import { Keyframes, Frame } from 'react-keyframes';

class extends Component {
  render () {
    return <Keyframes component="Container" delay={300} className="animation-test">
      <Frame>foo</Frame>
      <Frame>bar</Frame>
    </Keyframes>;
  }
}