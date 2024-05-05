import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PostForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ userName: "", content: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
     .then((response) => response.json())
     .then((data) => {
        navigate("/dashboard", { replace: true });
        window.location.reload();
      })
     .catch((error) => console.error(error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({...prevFormData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New post</h2>
      <label htmlFor="title">User</label>
      <input 
        type="text"
        id="title"
        name="userName"
        value={formData.userName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        id="content"
        name="content"
        value={formData.content}
        onChange={handleInputChange}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;