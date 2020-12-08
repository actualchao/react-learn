// import logo from './logo.svg';
import './App.css';
import React from "react"



// function Clock (props) {
//   return (
//     <div>{props.date.toString()}</div>
//   )
// }

// class Clocks extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { date: new Date() }
//   }

//   componentDidMount () {
//     setInterval(() => {
//       this.setState({ date: new Date() })
//     }, 1000);
//   }

//   render () {
//     const { state } = this
//     return (

//       <div>
//         {state.date.toString()}
//         <Clock date={state.date} />
//       </div>
//     )
//   }
// }



// function App () {
//   let date = new Date()


//   setTimeout(() => {
//     date = new Date()
//   }, 1000);


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Clocks date={date} />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class NameForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('提交的名字: ' + this.state.value);
  //   event.preventDefault();
  // }

  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <label>
  //         名字:
  //         <input type="text" value={this.state.value} onChange={this.handleChange} />
  //       </label>
  //       <input type="submit" value="提交" />
  //     </form>
  //   );
  // }
  constructor(props) {
    super(props);
    this.state = {
      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的文章: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange}></input>
        <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}


export default NameForm;
