import React from"react";

const ContactForm = () => {
    return(
        <div className="container">
            <div className="py-4">
                <h1>Contact page</h1>
                <form>
  <div className="form-group mb-4">
    <label for="Title1">Title: </label>
    <input type="text" class="form-control" id="Title1" aria-describedby="emailHelp" placeholder="Please input your title"/>
  </div>
  <div className="form-group mb-4">
    <label for="Description">Description: </label>
    <textarea class="form-control" id="Description" placeholder="Input your text"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        </div>
    );
};
export default ContactForm;
