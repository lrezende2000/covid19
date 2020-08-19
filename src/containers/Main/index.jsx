import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import { ContainerStyled } from './style'

function Main() {
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [country, setCountry] = useState('World');
  const [country2, setCountry2] = useState('World');
  const [isComparing, setIsComparing] = useState(false);
  let [date, month, year] = ( new Date() ).toLocaleDateString().split("/")
  const updateAt = `${date}/${month}/${year}`

  const getCovidData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, [])

  const getCovidData2 = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData2(data))
  }, [])

  useEffect(() => {    
    getCovidData(country);
    getCovidData2(country2);
  }, [getCovidData, getCovidData2, country, country2]);

  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country)
  }

  const handleChangeCompareCountry = ({ target }) => {
    const country2 = target.value
    setCountry2(country2)
  }

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          onChangeCompare={handleChangeCompareCountry}
          country={country}
          country2={country2}
          isComparing={isComparing}
          handleCompare={() => setIsComparing(!isComparing)}
        />
      </div>
      <Board data={data} isComparing={isComparing} data2={data2}/>
      
    </ContainerStyled>
  )
}

export default memo(Main)
