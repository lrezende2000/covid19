import React, { memo } from 'react';
import Graph from './Graph';
import { GraphTitle } from './style';

function GraphContent({
  firstCountryInfo,
  secondCountryInfo,
}) {
  const cases = [{
    name: 'Casos',
    fc: firstCountryInfo.cases,
    sc: secondCountryInfo.cases,
  }];
  const deaths = [{
    name: 'Mortos',
    fc: firstCountryInfo.deaths,
    sc: secondCountryInfo.deaths,
  }];
  const todayCases = [{
    name: 'Casos hoje',
    fc: firstCountryInfo.todayCases,
    sc: secondCountryInfo.todayCases,
  }];
  const todayDeaths = [{
    name: 'Mortos hoje',
    fc: firstCountryInfo.todayDeaths,
    sc: secondCountryInfo.todayDeaths,
  }];
  const recovered = [{
    name: 'Recuperados',
    fc: firstCountryInfo.recovered,
    sc: secondCountryInfo.recovered,
  }];
  const casesPerMillion = [{
    name: 'Casos / milhão',
    fc: firstCountryInfo.casesPerOneMillion,
    sc: secondCountryInfo.casesPerOneMillion,
  }];
  const deathsPerMillion = [{
    name: 'Mortes / milhão',
    fc: firstCountryInfo.deathsPerOneMillion,
    sc: secondCountryInfo.deathsPerOneMillion,
  }];
  const testsPerMillion = [{
    name: 'Testes / milhão',
    fc: firstCountryInfo.testsPerOneMillion,
    sc: secondCountryInfo.testsPerOneMillion,
  }];

  return (
    <div style={{
      padding: 20,
      borderRadius: 8,
      background: 'white',
      maxWidth: 1024,
    }}
    >
      <GraphTitle>
        {`Gráficos comparativo entre ${firstCountryInfo.country} e ${secondCountryInfo.country}`}
      </GraphTitle>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Graph
          data={cases}
          width={200}
          heigth={300}
          xDataKey="name"
          firstCountryDataKey="fc"
          secondCountryDataKey="sc"
          firstCountryName={firstCountryInfo.country}
          secondCountryName={secondCountryInfo.country}
        />
        <Graph
          data={deaths}
          width={200}
          heigth={300}
          xDataKey="name"
          firstCountryDataKey="fc"
          secondCountryDataKey="sc"
          firstCountryName={firstCountryInfo.country}
          secondCountryName={secondCountryInfo.country}
        />
        <Graph
          data={todayCases}
          width={200}
          heigth={300}
          xDataKey="name"
          firstCountryDataKey="fc"
          secondCountryDataKey="sc"
          firstCountryName={firstCountryInfo.country}
          secondCountryName={secondCountryInfo.country}
        />
        <Graph
          data={todayDeaths}
          width={200}
          heigth={300}
          xDataKey="name"
          firstCountryDataKey="fc"
          secondCountryDataKey="sc"
          firstCountryName={firstCountryInfo.country}
          secondCountryName={secondCountryInfo.country}
        />
        <Graph
          data={recovered}
          width={200}
          heigth={300}
          xDataKey="name"
          firstCountryDataKey="fc"
          secondCountryDataKey="sc"
          firstCountryName={firstCountryInfo.country}
          secondCountryName={secondCountryInfo.country}
        />
        <Graph
          data={casesPerMillion}
          width={200}
          heigth={300}
          xDataKey="name"
          firstCountryDataKey="fc"
          secondCountryDataKey="sc"
          firstCountryName={firstCountryInfo.country}
          secondCountryName={secondCountryInfo.country}
        />
        <Graph
          data={deathsPerMillion}
          width={200}
          heigth={300}
          xDataKey="name"
          firstCountryDataKey="fc"
          secondCountryDataKey="sc"
          firstCountryName={firstCountryInfo.country}
          secondCountryName={secondCountryInfo.country}
        />
        <Graph
          data={testsPerMillion}
          width={200}
          heigth={300}
          xDataKey="name"
          firstCountryDataKey="fc"
          secondCountryDataKey="sc"
          firstCountryName={firstCountryInfo.country}
          secondCountryName={secondCountryInfo.country}
        />
      </div>

    </div>
  );
}

export default memo(GraphContent);
