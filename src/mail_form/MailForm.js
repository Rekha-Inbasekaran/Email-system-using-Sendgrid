import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';

class MailForm extends React.Component {
    constructor() {
      super();
      this.state = {
          
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submitMailForm = this.submitMailForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submitMailForm(e) {
     // e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["f_emailid"] = "";
          fields["t_emailid"] = "";
          fields["subj"] = "";
          fields["message"] = "";
         // this.setState({fields:fields});
          //alert("Mail Sent");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      
      if (!fields["f_emailid"]) {
        formIsValid = false;
        errors["f_emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["f_emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["f_emailid"])) {
          formIsValid = false;
          errors["f_emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["t_emailid"]) {
        formIsValid = false;
        errors["t_emailid"] = "*Please enter email-ID.";
      }

      if (typeof fields["t_emailid"] !== "undefined") {
        //regular expression for email validation
         pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["t_emailid"])) {
          formIsValid = false;
          errors["t_emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["subj"]) {
        formIsValid = false;
        errors["subj"] = "*Please enter the subject.";
      }

      
      if (!fields["message"]) {
        formIsValid = false;
        errors["message"] = "*Please enter the message.";
      }
            
      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-composing-container">
     <div id="send">
        <h3>Create your mail</h3>
        <form name="MailForm"  onSubmit= {this.submitMailForm} method="POST" action="http://localhost/t1.php" >
        
        <label>From</label>
        <input type="text" name="f_emailid" value={this.state.fields.f_emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.f_emailid}</div>

        <label>To</label>
        <input type="text" name="t_emailid" value={this.state.fields.t_emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.t_emailid}</div>

        <label>Subject</label>
        <input type="text" name="subj" value={this.state.fields.subj} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.subj}</div>
        
        <label>Content</label>
        <input type="textarea" name="message" rows="50" cols="50" value={this.state.fields.message} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.message}</div>

        <center><Button variant="contained" color="primary" type="submit">
             SEND
        </Button></center>
        </form>
    </div>
</div>

      );
  }

}

export default MailForm;