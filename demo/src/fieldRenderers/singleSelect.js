import React from 'react'
import {connect} from 'react-redux'
import SingleSelectField from '@cmds/single-select-field'

export default connect()(({props, fieldData, cellData, dispatch}) => (
    <SingleSelectField
        {...props}
        optionId={cellData.optionId}
        options={fieldData.options.options}
        optionOrder={fieldData.options.optionOrder}
        coloredOptions={fieldData.options.coloredOptions}
        onChange={({id, optionId}) => {

            dispatch({
                type: 'UPDATE_SINGLE_SELECT_CELL',
                payload: {
                    id,
                    optionId
                }
            })
        }}
    />
))