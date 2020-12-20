import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import Home from './pages/MasterForm';
import Theme from './pages/Theme';
import Results from './pages/Results'


function App() {
  const meta = {
    title: 'Piotr Sobieszczyk- formularz',
    description: 'Formularz stworzony przy użyciu react i biblioteki formik',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags',
        author: 'Piotr Sobieszczyk',
        viewport: 'width=device-width, initial-scale=1',
      }
    }
  };

  // name: '',
  // surname: '',
  // birthday: '',
  // email: '',
  // phone: '',
  // country: '',
  // province: '',
  // city: '',
  // postalCode: '',
  // radio: '',
  // checkbox: [],
  // sliderCentre: '',
  // datetime_on: '',
  // datetime_off:'',

  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [birthday, setBirthday] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [country, setCountry] = useState("");
  // const [province, setProvince] = useState("");
  // const [city, setCity] = useState("");
  // const [postalCode, setPostalCode] = useState("");
  // const [radio, setRadio] = useState("");
  // const [checkbox, set] = useState("");
  // const [sliderCentre, setName] = useState("");
  // const [datetime_on, setName] = useState("");
  // const [datetime_off, setName] = useState("");

  return (
    <DocumentMeta {...meta}>
      <Theme>
        <Router>
          <div className="formMain">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/result' component={Results} />
            </Switch>
          </div>
        </Router>
      </Theme>
    </DocumentMeta>
  );
}

export default App;
