import React, { Component, Fragment } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component{
  render() {
    //const name = 'react'
    return (
      //<Counter />
      <div>
        <PhoneForm />
      </div>
      //<Fragment>
        //<Myname name = "리액트"/>
        // <div className="App">
        // {/*tutorial*/}
        // {
        //    name === 'react'
        //     && (<div>Hello {name}!</div>)
        // }
        // </div>
      //</Fragment>
    );
  }
}

export default App;
// 작성 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기 해줌
