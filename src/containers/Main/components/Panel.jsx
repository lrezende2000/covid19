import React, { memo, useState, useEffect } from 'react';
import {
  Card,
  Typography,
  Select,
  MenuItem,
} from '../../../components';
import { CardPanelContentStyled, ItemStyled, ButtonStyled } from './style';
import Api from '../../../api';

const navigatorHasShare = navigator.share;

function Panel({
  updateAt,
  onChange,
  onChangeCompareCountry,
  firstCountry,
  firstCountryInfo,
  secondCountry,
  secondCountryInfo,
  isComparing,
  handleCompare,
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

  const noComparingCountryText = `País: ${firstCountryInfo.country} - recuperados: ${firstCountryInfo.recovered}
Mortes: ${firstCountryInfo.deaths}
Mortes hoje: ${firstCountryInfo.todayDeaths}
Casos: ${firstCountryInfo.cases}
Casos hoje: ${firstCountryInfo.todayCases}
Casos por milhão: ${firstCountryInfo.casesPerOneMillion}
Mortes por milhão: ${firstCountryInfo.deathsPerOneMillion}
Testes por milhão: ${firstCountryInfo.testsPerOneMillion}`;

  const isComparingCountriesText = `Países: ${firstCountryInfo.country} e ${secondCountryInfo.country}
  Recuperados:
${firstCountryInfo.country} - ${firstCountryInfo.recovered}
${secondCountryInfo.country} - ${secondCountryInfo.recovered}
  Mortes:
${firstCountryInfo.country} - ${firstCountryInfo.deaths}
${secondCountryInfo.country} - ${secondCountryInfo.deaths}
  Mortes hoje:
${firstCountryInfo.country} - ${firstCountryInfo.todayDeaths}
${secondCountryInfo.country} - ${secondCountryInfo.todayDeaths}
  Casos:
${firstCountryInfo.country} - ${firstCountryInfo.cases}
${secondCountryInfo.country} - ${secondCountryInfo.cases}
  Casos hoje:
${firstCountryInfo.country} - ${firstCountryInfo.todayCases}
${secondCountryInfo.country} - ${secondCountryInfo.todayCases}
  Casos por milhão:
${firstCountryInfo.country} - ${firstCountryInfo.casesPerOneMillion}
${secondCountryInfo.country} - ${secondCountryInfo.casesPerOneMillion}
  Mortes por milhão:
${firstCountryInfo.country} - ${firstCountryInfo.deathsPerOneMillion}
${secondCountryInfo.country} - ${secondCountryInfo.deathsPerOneMillion}
  Testes por milhão:
${firstCountryInfo.country} - ${firstCountryInfo.testsPerOneMillion}
${secondCountryInfo.country} - ${secondCountryInfo.testsPerOneMillion}`;

  const textCovid19 = isComparing ? isComparingCountriesText : noComparingCountryText;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${firstCountry}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/',
    });
  };

  const renderShareButton = (
    <div>
      <ButtonStyled variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </ButtonStyled>
    </div>
  );

  const renderCopyButton = (
    <div>
      <ButtonStyled variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </ButtonStyled>
    </div>
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
            <ButtonStyled variant="contained" color="primary" onClick={handleCompare}>
              Comparar
            </ButtonStyled>
            {isComparing
              && (
              <Select onChange={onChangeCompareCountry} value={secondCountry}>
                {countries.map(renderCountries)}
              </Select>
              )}
            {navigatorHasShare ? renderShareButton : renderCopyButton}
          </div>
        </div>
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Panel);
