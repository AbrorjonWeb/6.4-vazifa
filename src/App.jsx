import React, { useState } from "react";

function name(Names) {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);

  const handleAddName = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setNameList([...nameList, name]);
      setName("");
    }
  };

  const handleClearList = () => {
    setNameList([]);
  };

  return (
    <div>
      <h1>Name List</h1>
      <form onSubmit={handleAddName}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {nameList.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
      {nameList.length > 0 && <button onClick={handleClearList}>clear</button>}
    </div>
  );
}

const agree = (agree) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agree: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, agree } = formData;

    if (!name || !email) {
      setError("👆bosing!");
    } else if (!agree) {
      setError("👆bosing!");
    } else {
      console.log("malumotlar", formData);
      alert("bluethoose connected succesfuly !!!");
      setFormData({ name: "", email: "", agree: false });
    }
  };

  return (
    <div>
      <h1>sign in</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="ismingizni kiriting"
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="emailingzini kiriting"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            I agree
          </label>
        </div>
        {error && <p>{error}</p>}
        <button type="submit">send</button>
      </form>
    </div>
  );
};

function revrse(reversa) {
  const [text, setText] = useState("");

  const reverseText = (str) => {
    return str.split("").reverse().join("");
  };

  return (
    <div>
      <h1>Reverse Names</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Reversed: {reverseText(text)}</p>
    </div>
  );
}

function password(password) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        Show Password
      </label>
    </div>
  );
}

function color(colors) {
  const [bgColor, setBgColor] = useState("red");

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh" }}>
      <h1>Diskateka</h1>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />
    </div>
  );
}

function info(malumotnoma) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:");
    console.log(`Ism: ${formData.firstName}`);
    console.log(`Familiya: ${formData.lastName}`);
    console.log(`Tug'ilgan sana: ${formData.birthDate}`);
    console.log(`Jins: ${formData.gender}`);
  };

  return (
    <div>
      <h1>malumotnoma</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>surname</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>date</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>jins</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Tanlang</option>
            <option value="Erkak">Erkak</option>
            <option value="Ayol">Ayol</option>
          </select>
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
}

function ovoz(ovoz) {
  const [votes, setVotes] = useState({
    JavaScript: 0,
    Python: 0,
    Java: 0,
  });

  const handleVote = (language) => {
    setVotes({
      ...votes,
      [language]: votes[language] + 1,
    });
  };

  return (
    <div>
      <h1>saylov</h1>
      <div>
        <button onClick={() => handleVote("JavaScript")}>js</button>
        <button onClick={() => handleVote("Python")}>py</button>
        <button onClick={() => handleVote("Java")}>java</button>
      </div>

      <p>js {votes.JavaScript}</p>
      <p>py {votes.Python}</p>
      <p>java {votes.Java}</p>
    </div>
  );
}

const input = (input) => {
  const [inputs, setInputs] = useState([""]);

  const addInput = () => setInputs([...inputs, ""]);
  const handleInputChange = (index, value) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };
  const handleSubmit = () => console.log(inputs);

  return (
    <div>
      <h1>input</h1>
      {inputs.map((input, index) => (
        <input
          key={index}
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
          placeholder={`Input ${index + 1}`}
        />
      ))}
      <button onClick={addInput}>add</button>
      <button onClick={handleSubmit}>console </button>
    </div>
  );
};

const math = (kalkulyator) => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAddition = () => setResult(Number(num1) + Number(num2));
  const handleMultiplication = () => setResult(Number(num1) * Number(num2));

  return (
    <div>
      <h1>kalkulyator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="1-son"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="2-son"
      />
      <button onClick={handleAddition}> + </button>
      <button onClick={handleMultiplication}> *</button>
      <h1>res{result !== null ? result : "__"}</h1>
    </div>
  );
};

const form = (forma) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;
    if (!name || !email || !phone) {
      setError("hamma katakni toldiring");
    } else {
      console.log("malumotnoma", formData);
      alert("bluethoose connected succesfuly !!!");
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  return (
    <div>
      <h1>from</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ismingiz</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="ismingizni kiritng"
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="emailnigizni kiriting"
          />
        </div>
        <div>
          <label>telefon</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="telefoningizni kiriting"
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default App;
