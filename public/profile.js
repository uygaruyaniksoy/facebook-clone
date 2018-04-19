const id = parseInt(window.location.pathname.substr(1));

class Profile extends React.Component {
  render() {

    return (
      <div>
        <h1>
          hello
        </h1>
        <p>
          {
            `profile with id: ${id}`
          }
        </p>
      </div>
    )
  }
}

ReactDOM.render(<Profile/>, document.getElementById("root"));