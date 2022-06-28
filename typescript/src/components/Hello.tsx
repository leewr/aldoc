import * as React from "react"

export interface HelloPorps {
  compiler: string;
  frameword: string;
}

// export const Hello = (props: HelloPorps) => <h1>Hello from {props.compiler} and {props.frameword}</h1>;

export class Hello extends React.Component<HelloPorps, {}> {
  render() {
    return <h1> hello from {this.props.compiler} an {this.props.frameword}</h1>
  }
}