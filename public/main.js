const initUsers = () => {
  // these pictures are scraped from https://www.pexels.com/search/animal/
  const pictures = [
    "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/9291/nature-bird-flying-red.jpg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/45164/mare-animal-nature-ride-45164.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/45911/peacock-plumage-bird-peafowl-45911.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/38278/tiger-head-wildlife-animal-38278.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/45242/wolf-torque-wolf-moon-cloud-45242.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/50582/selfie-monkey-self-portrait-macaca-nigra-50582.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/70080/elephant-africa-african-elephant-kenya-70080.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/225869/pexels-photo-225869.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/302304/pexels-photo-302304.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/160933/girl-rabbit-friendship-love-160933.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/39504/giraffe-animal-funny-facial-expression-39504.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/434090/pexels-photo-434090.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/234054/pexels-photo-234054.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/86462/red-kite-bird-of-prey-milan-raptor-86462.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://images.pexels.com/photos/236636/pexels-photo-236636.jpeg?auto=compress&cs=tinysrgb&h=350",
  ];

  let i = 0;
  [
    {id: Math.random()*100000 | 0, name: 'Preston', surname: 'Laver', image: 'https://orig00.deviantart.net/23a2/f/2010/352/f/7/headshotid_by_bokogreat_stock-d355xf3.jpg', friends: [], pictures: [ pictures[i++], pictures[i++], pictures[i++], ], },
    {id: Math.random()*100000 | 0, name: 'Delilah', surname: 'Nowlin', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHlQOv9gOKhTWjZEMPYUB15eAmcWEjQE9WStjuDX19cM5ZoZf', friends: [], pictures: [ pictures[i++], pictures[i++], pictures[i++], ], },
    {id: Math.random()*100000 | 0, name: 'Casandra', surname: 'Mckell', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV31p-oGNXwsOpNRAKcMq4HDPER9asurPxP_T4BjA6s1snffd-aw', friends: [], pictures: [ pictures[i++], pictures[i++], pictures[i++], ], },
    {id: Math.random()*100000 | 0, name: 'Patty', surname: 'Tejeda', image: 'https://media.istockphoto.com/photos/asian-women-profile-picture-id139662784?k=6&m=139662784&s=612x612&w=0&h=GhwIW_Q3TIhdFgrVlbg7sMtLXzRNmaiLzKtjIQhX_sE=', friends: [], pictures: [ pictures[i++], pictures[i++], pictures[i++], ], },
    {id: Math.random()*100000 | 0, name: 'Evelia', surname: 'Peterka', image: 'https://s3.eu-central-1.amazonaws.com/artistarea.gallereplay.com/production/user_9/picture_2405201614728.jpg', friends: [], pictures: [ pictures[i++], pictures[i++], pictures[i++], ], },
    {id: Math.random()*100000 | 0, name: 'Sona', surname: 'Girardi', image: 'https://orig00.deviantart.net/b682/f/2013/135/4/3/profile_picture_by_mellodydoll_stock-d65fbf8.jpg', friends: [], pictures: [ pictures[i++], pictures[i++], pictures[i++], ], },
    {id: Math.random()*100000 | 0, name: 'Ashton', surname: 'Every', image: 'http://actionsportsgames.com.au/cms/wp-content/uploads/2014/11/profile_picture_by_naivety_stock-d5x8lbn.jpg', friends: [], pictures: [ pictures[i++], pictures[i++], pictures[i++], ], },
    {id: Math.random()*100000 | 0, name: 'Jessi', surname: 'Swing', image: 'https://images.pexels.com/photos/736715/pexels-photo-736715.jpeg?auto=compress&cs=tinysrgb&h=350', friends: [], pictures: [ pictures[i++], pictures[i++], pictures[i++], ], },
    {id: Math.random()*100000 | 0, name: 'Keneth', surname: 'Eder', image: 'https://img00.deviantart.net/038e/i/2010/150/b/0/me_2010_by_axy_stock.jpg', friends: [], pictures: [ pictures[i++], pictures[i++], pictures[i++], ], },
    {id: Math.random()*100000 | 0, name: 'Nannie', surname: 'Petrick', image: 'https://orig00.deviantart.net/b893/f/2011/227/f/6/profile_picture_by_aehireiel_stock-d46o5ls.jpg', friends: [], pictures: [ pictures[i++], pictures[i++], pictures[i], ], }
  ].map(a => db.collection('users').insertOne(a));
};

const delUsers = () => {
  db.collection('users').deleteMany();
};

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      pageState: undefined,
      addState: {},
      users: [],
    };

    this.fetchUsers = this.fetchUsers.bind(this);

    this._renderAdd = this._renderAdd.bind(this);
    this._renderDel = this._renderDel.bind(this);
    this._renderLog = this._renderLog.bind(this);
  }

  _renderAdd() {
    return (
      <div>
        <div className="row">
          <div className="form-group col-6">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={e =>
                this.setState({ addState: Object.assign({}, this.state.addState, { name: e.nativeEvent.target.value }) })
              }
            />
          </div>
          <div className="form-group col-6">
            <label>Surname:</label>
            <input
              type="text"
              className="form-control"
              onChange={e =>
                this.setState({ addState: Object.assign({}, this.state.addState, { surname: e.nativeEvent.target.value }) })
              }
            />
          </div>
        </div>

        <div className="dropdown col-12">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {
              this.state.addState.gender ?
                this.state.addState.gender[0].toUpperCase() + this.state.addState.gender.substr(1) :
                "Gender"
            }
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              className="dropdown-item"
              onClick={() =>
                this.setState({ addState: Object.assign({}, this.state.addState, { gender: 'female' }) })
              }
              href="#"
            >
              Female
            </a>
            <a
              className="dropdown-item"
              onClick={() =>
                this.setState({ addState: Object.assign({}, this.state.addState, { gender: 'male' }) })
              }
              href="#"
            >
              Male
            </a>
          </div>
        </div>

        <div className="col-6" style={{ marginTop: 10 }}>
          <div className="alert alert-info">
            <strong>Info!</strong> The rest is optional
          </div>
        </div>

        <div className="form-group col-6">
          <label>Age:</label>
          <input
            type="text"
            className="form-control"
            onChange={e =>
              this.setState({ addState: Object.assign({}, this.state.addState, { age: e.nativeEvent.target.value }) })
            }
          />
        </div>

        <div className="form-group col-6">
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            onChange={e =>
              this.setState({ addState: Object.assign({}, this.state.addState, { email: e.nativeEvent.target.value }) })
            }
          />
        </div>

        <button
          onClick={() => {
            db.collection('users').insertOne(Object.assign({}, this.state.addState, {id: Math.random()*100000 | 0})).then(this.fetchUsers);
          }}
          style={{
            marginTop: 50,
          }}
          type="button"
          className="btn btn-primary col-6 offset-3"
        >
          Add User
        </button>
      </div>
    );
  }

  _renderDel() {
    return (
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-6">
          <div className="alert alert-info">
            <strong>Info!</strong> Select a user to delete from facebook database.
          </div>
        </div>
        <div className="col-6">
          {
            this.state.users.map(u => (
              <a key={u.id} onClick={() => db.collection('users').deleteOne({ id: u.id }).then(this.fetchUsers)}>
                <div className="row" style={{ cursor: 'pointer', margin: 5 }}>
                  <img src={u.image} style={{ width: 50, height: 50 }}/>
                  <h4>
                    {`${u.name} ${u.surname}`}
                  </h4>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    );
  }

  _renderLog() {
    return (
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col-6">
          <div className="alert alert-info">
            <strong>Info!</strong> Select a user to log in as
          </div>
        </div>
        <div className="col-6">
          {
            this.state.users.map(u => (
              <a
                key={u.id}
                onClick={() => {
                  localStorage.setItem('facebook-clone-id', u.id);
                  window.location.pathname="profile";
                }}
              >
                <div className="row" style={{ cursor: 'pointer', margin: 5 }}>
                  <img src={u.image} style={{ width: 50, height: 50 }}/>
                  <h4>
                    {`${u.name} ${u.surname}`}
                  </h4>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    );
  }


  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    client.login().then(() => {
      // db.collection('users').remove().limit(100).execute().then((users) => this.setState({ users }));
      db.collection('users').find().limit(100).execute().then((users) => this.setState(
        { users },
        () => this.state.users.length === 0 && initUsers()
      ));
    });
  }

  render() {
    return (
      <div>
        <div className="offset-2 col-8" style={{
          marginTop: 100,
          backgroundColor: 'red',
          height: 700,
        }}>
          <h3>
            Choose an action from below
          </h3>
          <div className="row">
            <div className="btn-group col-12" role="group" aria-label="Basic example">
              <button
                onClick={() => this.setState({ pageState: 'ADD' })}
                type="button"
                className="btn btn-secondary col-4"
              >
                Add User
              </button>
              <button
                onClick={() => this.setState({ pageState: 'DEL' })}
                type="button"
                className="btn btn-secondary col-4"
              >
                Delete User
              </button>
              <button
                onClick={() => this.setState({ pageState: 'LOG' })}
                type="button"
                className="btn btn-secondary col-4"
              >
                Log in
              </button>
            </div>
          </div>

          <div>
            { this.state.pageState === 'ADD' && this._renderAdd()}
            { this.state.pageState === 'DEL' && this._renderDel()}
            { this.state.pageState === 'LOG' && this._renderLog()}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<MainPage/>, document.getElementById("root"));
