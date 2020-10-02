import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Gender extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      value: "male"
    }
  }

  render() {
    const { props, state } = this
    return (
        <Dropdown
          isOpen={state.isOpen}
          caret={true}
          style={{ width: "100%" }}
          toggle={() => {
            this.setState({
              isOpen: !state.isOpen
            })
          }}
          onChange={(value) => {
            console.log("the val ", value)
            this.setState({
              isOpen: !state.isOpen
            })
          }} >
          <DropdownToggle
            // caret="right"
            style={{ 
              background: "#fff", 
              width: "100%",
              textAlign: "left"
            }}
          >{state.value}</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                this.setState({
                  value: "Male"
                })
                props.onChange("male")
              }}>Male</DropdownItem>

            <DropdownItem
              onClick={() => {
                this.setState({
                  value: "Female"
                })
                props.onChange("female")
              }}>Female</DropdownItem>
          </DropdownMenu>
        </Dropdown>
    )
  }
}

export default Gender;