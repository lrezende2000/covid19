import React, { memo, useState, useEffect } from 'react'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import { CardPanelContentStyled, ItemStyled } from './style'
import Api from '../../../api';

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country }) {
  const { cases, recovered, deaths, todayCases, todayDeaths, casesPerOneMillion, deathsPerOneMillion, testsPerOneMillion } = data
  const [countries, setCountries] = useState([]);

  
  
  useEffect(() => {    
    Api.getAllCountriesName().then(data => setCountries(data))
  }, [countries])

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country}>
      <ItemStyled>
        <div>{country}</div>
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `País: ${country} - recuperados: ${recovered}
Mortes: ${deaths}
Mortes hoje: ${todayDeaths}
Casos: ${cases}
Casos hoje: ${todayCases}
Casos por milhão: ${casesPerOneMillion}
Mortes por milhão: ${deathsPerOneMillion}
Testes por milhão: ${testsPerOneMillion}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">COVID19</Typography>
          <Typography variant="h6" component="span" color="primary">{' '}Painel Coronavírus</Typography>
          <Typography variant="body2" component="span" color="primary">{' '}Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {countries.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)