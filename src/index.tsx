import * as React from "react";
import * as ReactDOM from "react-dom";
//import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import FirstComponent from './FirstComponent'

//ReactDOM.render(<DatePicker />, document.getElementById("root"));

ReactDOM.render(
    <div>
    <h1>Hello, Welcome to the first page</h1>
    <FirstComponent/>
    </div>,
      document.getElementById("root")
);