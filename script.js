body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #80c7e0;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #80c7e0;
  padding: 10px 20px;
}

.title {
  font-size: 2rem;
  font-style: italic;
  text-decoration: underline;
  font-weight: bold;
  color: black;
  text-shadow: 2px 2px 3px gray;
}

.counter {
  background-color: #1e5a6e;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid black;
  font-weight: bold;
}

.main-container {
  display: flex;
}

.upgrade-menu {
  background-color: #205c71;
  width: 200px;
  height: calc(100vh - 50px);
  color: red;
  padding: 15px;
  border-radius: 0 20px 20px 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
}

.upgrade-menu button {
  display: block;
  margin: 10px 0;
  padding: 10px;
  background-color: #ffcccb;
  border: 1px solid black;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
}

.click-area {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

#click-button {
  width: 150px;
  height: 150px;
  background-color: red;
  border: 2px solid black;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
  color: black;
}

#rain-container img {
  position: absolute;
  width: 40px;
  animation: fall 3s linear infinite;
  pointer-events: none;
  z-index: 10;
}

@keyframes fall {
  0% { top: -50px; opacity: 1; }
  100% { top: 100vh; opacity: 0; }
}
