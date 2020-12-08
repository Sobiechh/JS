import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import Home from './pages/MasterForm';
import Theme from './pages/Theme';


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

  return (
    <DocumentMeta {...meta}>
      <Theme>
        <Router>
          <div className="formMain">
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </Theme>
    </DocumentMeta>
  );
}

export default App;
