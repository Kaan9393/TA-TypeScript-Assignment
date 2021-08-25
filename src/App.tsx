import React, { EventHandler, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Url, UrlObject } from "url";
import { url } from "inspector";

interface IUser {
    name: string;
    lastname: string;
    image: string;
}

const createUser = (user: IUser) => ({
  givenName: user.name,
  surname: user.lastname,
  picture: user.image,
  created: new Date().getTime(),
});

function createInput(labelName: string, onChange: React.Dispatch<React.SetStateAction<string>>) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value);
  return (
    <label>
      {labelName}:<input type="text" onChange={handleChange}></input>
    </label>
  );
}

function App() {
  const [user, setUser] = useState<any>();
  const [givenName, setGivenName] = useState("");
  const [surname, setSurname] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    const newUser = createUser({
      name: givenName,
      lastname: surname,
      image: imageUrl,
    });
    setUser(newUser);
  };

  const placeHolderImage =
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcohenwoodworking.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fimage-placeholder-500x500.jpg&f=1&nofb=1";

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ border: "2px solid white", width: 300, padding: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span>First Name</span>
            <span style={{ fontSize: 22 }}>{user?.givenName}</span>
          </div>
          <div style={{ height: 16 }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span>Last Name</span>
            <span style={{ fontSize: 22 }}>{user?.surname}</span>
          </div>
          <div style={{ height: 16 }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span>Image</span>
            <img
              alt=""
              src={user?.picture || placeHolderImage}
              style={{
                width: 60,
                height: 60,
                borderRadius: 60 / 2,
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div style={{ height: 32 }} />

        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: 300,
            alignItems: "center",
            border: "2px solid white",
            padding: 16,
          }}
        >
          {createInput("Given Name", setGivenName)}
          {createInput("Last Name", setSurname)}
          {createInput("Image URL", setImageUrl)}
          <div style={{ height: 16 }} />

          <input type="submit" style={{ width: 153 }}></input>
        </form>
      </header>
    </div>
  );
}

export default App;
