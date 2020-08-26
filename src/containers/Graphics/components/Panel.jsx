import React, { memo, useState, useEffect } from 'react';
import {
  Card,
  Typography,
  Select,
  MenuItem,
} from '../../../components';
import { CardPanelContentStyled, ItemStyled } from './style';
import Api from '../../../api';

function Panel({
  updateAt,
  onChange,
  onChangeCompareCountry,
  firstCountry,
  secondCountry,
}) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    Api.getAllCountriesName()
      .then(setCountries);
  }, [countries]);

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country}>
      <ItemStyled>
        <div>{country}</div>
      </ItemStyled>
    </MenuItem>
  );

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">COVID19</Typography>
          <Typography variant="h6" component="span" color="primary">
            {' - '}
            Painel Coronavírus
          </Typography>
          <Typography variant="body2" component="span" color="primary">
            {' - '}
            Atualizado em:
            {' '}
            {updateAt}
          </Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={firstCountry}>
              {countries.map(renderCountries)}
            </Select>
            <Select onChange={onChangeCompareCountry} value={secondCountry}>
              {countries.map(renderCountries)}
            </Select>
          </div>
        </div>
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Panel);
