import React from 'react'

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "af25645b-e00c-4205-9c65-d694e704b2d8");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <center>
    <div class="container">
      <h3>Contact form</h3><br />
      <form  id="contact" onSubmit={onSubmit}>
        <input type="text" name="name"/><br /><br />
        <input type="email" name="email"/><br /><br />
        <textarea name="message"></textarea><br /><br />
        <input type="submit" />
      </form>
      <span>{result}</span>
    </div>
    </center>
  
    
  );
}

export default Contact