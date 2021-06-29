import { makeStyles } from '@material-ui/core/styles'
import HomeBudBar from './components/HomeBudBar'

const useStyles = makeStyles((theme) => {
  root: {

  }
});

function App() {
  const classes = useStyles();

  return (
    <div>
      <HomeBudBar></HomeBudBar>
    </div>
  );
}

export default App;
