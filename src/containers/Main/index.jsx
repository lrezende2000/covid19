import React, {
  memo,
  useState,
  useCallback,
  useEffect,
} from 'react';
import Api from '../../api';
import Board from './components/Board';
import Panel from './components/Panel';
import ContainerStyled from './style';
import { Loading, NavBar } from '../../components';

function Main() {
  const [firstCountryInfo, setFirstCountryInfo] = useState({});
  const [secondCountryInfo, setSecondCountryInfo] = useState({});
  const [firstCountry, setFirstCountry] = useState('World');
  const [secondCountry, setSecondCountry] = useState('Brazil');
  const [isComparing, setIsComparing] = useState(false);
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
          firstCountryInfo={firstCountryInfo}
          secondCountry={secondCountry}
          secondCountryInfo={secondCountryInfo}
          isComparing={isComparing}
          handleCompare={() => setIsComparing(!isComparing)}
        />
      </div>
      {isLoading
        ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
          >
            <Loading />
          </div>
        )
        : (
          <Board
            firstCountryInfo={firstCountryInfo}
            isComparing={isComparing}
            secondCountryInfo={secondCountryInfo}
          />
        )}
    </ContainerStyled>
  );
}

export default memo(Main);
