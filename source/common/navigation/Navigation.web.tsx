import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '~/Main/screens/Main.screen';
import EventsList from '~/Events/List/screens/List.screen';
import EventsItem from '~/Events/Item/screens/Item.screen';
import EventsAdd from '~/Events/Add/screens/Add.screen';
import Interests from '~/Interests/screens/Interests.screen';
import Profile from '~/Profile/screens/Profile.screen';

export default (): JSX.Element => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/events" component={EventsList} />
            <Route exact path="/events/add" component={EventsAdd} />
            <Route exact path="/events/:id" component={EventsItem} />
            <Route exact path="/interests" component={Interests} />
            <Route exact path="/profile" component={Profile} />
        </Switch>
    </Router>
);