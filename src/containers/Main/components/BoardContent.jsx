import React, { memo } from 'react';
import { Grid, Skeleton } from '../../../components';
import Card from './Card';

function BoardContent({ data, isComparing }) {
  const {
    cases,
    todayDeaths,
    recovered, deaths,
    todayCases,
    casesPerOneMillion,
    deathsPerOneMillion,
    testsPerOneMillion,
  } = data;

  const getValue = (value) => value ?? <Skeleton variant="text" width={182} height={60} />;

  return (
    <Grid xs={isComparing ? 6 : 12} container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#30D322" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(casesPerOneMillion)} label="Casos por milhão" color="#767676" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(deathsPerOneMillion)} label="Mortes por milhão" color="#FF3333" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(testsPerOneMillion)} label="Testes por milhão" color="#581845" />
      </Grid>
    </Grid>
  );
}

export default memo(BoardContent);
