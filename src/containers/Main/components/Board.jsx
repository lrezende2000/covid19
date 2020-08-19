import React, { memo } from 'react'
import { Grid } from '../../../components'
import BoardContent from './BoardContent'

import { Divider } from './style'

function Board({ data, isComparing, data2 }) {
  return (
    <Grid container direction="row">
      <BoardContent data={data} isComparing={isComparing} />
      {isComparing && (
        <>
          <Divider />
          <BoardContent data={data2} isComparing={isComparing} />
        </>
      )}
    </Grid>
  )
}

export default memo(Board)