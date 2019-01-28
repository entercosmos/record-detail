import React from 'react'
import {connect} from 'react-redux'
import LongTextField from '@cmds/long-text-field'

export default connect()(({props, cellData, dispatch}) => (
    <LongTextField
        {...props}
        longText={cellData.longText}
        onChange={({id, longText}) => {
            dispatch({
                type: 'UPDATE_LONG_TEXT_CELL',
                payload: {
                    id,
                    longText
                }
            })
        }}
    />
))