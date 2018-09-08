import * as React from 'react';
import './Hello.css';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

interface IState {
  currentEnthusiasm: number;
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

class Hello extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }
  public onIncrement = () =>
    this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  public onDecrement = () =>
    this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
  public updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({
      currentEnthusiasm,
    });
  }

  public render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }
}

export default Hello;
