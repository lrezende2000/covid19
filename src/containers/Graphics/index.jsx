import React, {
  memo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import Api from '../../api';
import ContainerStyled from './style';
import { NavBar, Loading } from '../../components';
import Panel from './components/Panel';
import GraphContent from './components/GraphContent';

function Graphics() {
  const [firstCountryInfo, setFirstCountryInfo] = useState({});
  const [secondCountryInfo, setSecondCountryInfo] = useState({});
  const [firstCountry, setFirstCountry] = useState('World');
  const [secondCountry, setSecondCountry] = useState('Brazil');
  const [isLoading, setIsLoading] = useState(true);
  const [date, month, year] = (new Date()).toLocaleDateString().split('/');
  const updateAt = `${date}/${month}/${year}`;

  const getCovidCountryData = useCallback((country) => {
    Api.getCountry(country)
      .then(setFirstCountryInfo);
  }, []);

  const getCovidComparabledCountryData = useCallback((country) => {
    Api.getCountry(country)
      .then(setSecondCountryInfo);
  }, []);

  useEffect(() => {
    getCovidCountryData(firstCountry);
    getCovidComparabledCountryData(secondCountry);
    setInterval(() => setIsLoading(false), 3000);
  }, [getCovidCountryData, firstCountry, getCovidComparabledCountryData, secondCountry, isLoading]);

  const handleChangeCountry = ({ target }) => {
    setFirstCountry(target.value);
    setIsLoading(true);
  };

  const handleChangeComparedCountry = ({ target }) => {
    setSecondCountry(target.value);
    setIsLoading(true);
  };
  return (
    <ContainerStyled>
      <NavBar />
      <div className="mb-2">
        <Panel
          updateAt={updateAt}
          onChange={handleChangeCountry}
          onChangeCompareCountry={handleChangeComparedCountry}
          firstCountry={firstCountry}
          secondCountry={secondCountry}
        />
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      >
        {isLoading
          ? <Loading />
          : (
            <GraphContent
              firstCountryInfo={firstCountryInfo}
              secondCountryInfo={secondCountryInfo}
            />
          )}
      </div>
    </ContainerStyled>
  );
}

export default memo(Graphics);
