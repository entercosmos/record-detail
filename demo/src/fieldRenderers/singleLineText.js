import React from 'react'
import {connect} from 'react-redux'
import SingleLineTextField from '@cmds/single-line-text-field'

export default connect()(({props, cellData, dispatch}) => (
    <SingleLineTextField
        {...props}
        text={cellData.text}
        onChange={({id, text}) => {

            dispatch({
                type: 'UPDATE_SINGLE_LINE_TEXT_CELL',
                payload: {
                    id,
                    text
                }
            })
        }}
    />
))