import React from 'react'
import {connect} from 'react-redux'
import MultipleSelectField from '@cmds/multiple-select-field'

export default connect()(({props, fieldData, cellData, dispatch}) => {

    const onOptionLink = ({id, optionId}) => {
        dispatch({
            type: 'UPDATE_MULTIPLE_SELECT_CELL_BY_LINKING_OPTION',
            payload: {
                id,
                optionId
            }
        })
    }

    const onOptionUnlink = ({id, optionId}) => {
        dispatch({
            type: 'UPDATE_MULTIPLE_SELECT_CELL_BY_UNLINKING_OPTION',
            payload: {
                id,
                optionId
            }
        })
    }

    return (
        <MultipleSelectField
            {...props}
            optionIds={cellData.optionIds}
            options={fieldData.options.options}
            optionOrder={fieldData.options.optionOrder}
            coloredOptions={fieldData.options.coloredOptions}
            onOptionLink={onOptionLink}
            onOptionUnlink={onOptionUnlink}
        />
    )
})