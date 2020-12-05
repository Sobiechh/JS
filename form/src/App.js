import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import Home from './pages/Home';
import Paginated from './pages/Paginated';

// <meta name="author" content="Piotr Sobieszczyk">
// <meta name="viewport" content="width=device-width, initial-scale=1">

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
      <Router>
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route exact path ='/paginated' component={Paginated} />
        </Switch>
      </Router>
    </DocumentMeta>
  );
}

export default App;
