// let tester = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.state = {
      index: 0,
      tester: ''
    }
  }
  handleButton() {
    window.postMessage({type: "FROM_PAGE", method: "transfer", payee: "0x0", amount: "100"}, "*");
    this.setState((prevState) => {
      return {
        index: prevState.index+1,
        tester: document.tester
      }
    });
  }
  render() {
    return (
      <div>
        <h1>React Playground</h1>
        <p>Play around, here's some sample text</p>
        <button onClick={this.handleButton}>Transfer 100 to 0x0</button>
        <p>Index: {this.state.index}</p>
        <p>Hello : {this.state.tester} : {window.tester} : {window.document.testVar} </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
