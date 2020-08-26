import React, { memo } from 'react';
import { Grid } from '../../../components';
import BoardContent from './BoardContent';
import { Header, HeaderLabel, Divider } from './style';

function Board({ firstCountryInfo, isComparing, secondCountryInfo }) {
  return (
    <>
      <Header isComparing={isComparing}>
        <HeaderLabel>{firstCountryInfo.country}</HeaderLabel>
        <HeaderLabel>{isComparing && secondCountryInfo.country}</HeaderLabel>
      </Header>
      <Grid container direction="row" style={{ justifyContent: 'center' }}>
        <BoardContent data={firstCountryInfo} isComparing={isComparing} />
        {isComparing && (
          <>
            <Divider />
            <BoardContent data={secondCountryInfo} isComparing={isComparing} />
          </>
        )}
      </Grid>
    </>
  );
}

export default memo(Board);
