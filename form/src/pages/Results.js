import React from 'react';
import Grid from '@material-ui/core/Grid';

function results(props) {
    const checkbox = props.location.props.values.checkbox
    return (
        <React.Fragment>
        <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
  >
        <form>
        <h1>
            Cześć, {props.location.props.values.name} {props.location.props.values.surname}
        </h1>
        <hr>
        </hr>
        Twoje dane osobowe:  <br />
        Data urodzin: {props.location.props.values.birthday} <br />
        Kraj: {props.location.props.values.country} <br />
        Województwo: {props.location.props.values.province} <br />
        Miasto: {props.location.props.values.city} <br />
        Kod pocztowy: {props.location.props.values.postalCode} <br />
        <hr>
        </hr>
        Twoje dane kontatkowe:  <br />
        email: {props.location.props.values.email} <br />
        nr telefonu: {props.location.props.values.phone} <br />
        <hr>
        </hr>
        <h3> Dante dotyczące pobytu </h3>
        <hr>
        </hr>
        Wybrana przez Ciebie lokazliacja wypoczynku: {props.location.props.values.radio} <br />

        { checkbox.length > 0 ? "Wybrane przez Ciebie dodatkowe posiłki: " + checkbox.map(item => (
        item
      )) : "Brak wybranych posiłków"} <br />
        Odległość od centrum: {props.location.props.values.sliderCentre} <br />
        Wypoczynek od: {props.location.props.values.datetime_on} <br />
        Wypoczynek do: {props.location.props.values.datetime_off} <br />

        </form>
        </Grid>
        </React.Fragment>
    )
}

export default results;