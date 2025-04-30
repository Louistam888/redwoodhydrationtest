import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={TestPage} name="test" prerender/>
      <Route path="/new" page={NewPage} name="new" prerender/>
    </Router>
  )
}

export default Routes
