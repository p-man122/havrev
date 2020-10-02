import React, { Component } from 'react';
import Swal from "sweetalert2";
 
class DisplayImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updating: false,
      source: null,
    };

    this._isMounted = false;
    this.filePicker = null;
    this.onUpdateImage = this.onUpdateImage.bind(this);
  }

  componentDidMount() {
    if (!this._isMounted) {
      this._isMounted = true;
      /*  this.props.setInfo({
        details: {
          firstName: 'jaguns',
        },
      }); */
    }
  }

  onUpdateImage(event) {
    const file = event.target.files[0];

    const validate = () => {
      let message = false;
      console.log({ file });
      if (['image/jpeg', 'image/jpg', 'image/png'].indexOf(file.type) > -1) {
        if (file.size <= 5242880) { // <== 5mb
        } else message = 'The image you picked is too large (maximium : 5mb)';
      } else message = 'You picked an unacceptable file, please try another one (image/jpeg, image/jpg, image/png)';
      if (message) {
        Swal.fire({
          title: "Upload Error",
          html: message,
          showCancelButton: false,
          showConfirmButton: true,
        });
        return false;
      }
      return true;
    };

    // validate file
    if (validate()) {
      this.setState({
        file,
        source: URL.createObjectURL(file),
      });

      this.props.onChange(file)
    }
  }

  render() {
    const {
      disabled
    } = this.props;
    const { source } = this.state;

    return (
      <div
        className={`avi${disabled ? ' disabled' : ''}`}
        onClick={() => {
          if (!disabled && this.filePicker) {
            this.filePicker.click();
          }
        }}
      >
        <img src={source} alt="" />
        <span className="icon icon-user" />
        <input
          type="file"
          className="picker"
          accept="image/jpeg,image/jpg,image/png"
          ref={(el) => {
            if(el && !this.filePicker) this.filePicker = el;
          }}
          onChange={this.onUpdateImage}
        />
      </div>
    );
  }
}

export default DisplayImage;
