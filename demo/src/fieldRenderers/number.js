import React from 'react'
import {connect} from 'react-redux'
import NumberField from '@cmds/number-field'

export default connect()(({props, fieldData, cellData, dispatch}) => (
    <NumberField
        {...props}
        number={cellData.number}
        allowNegativeNumbers={fieldData.options.allowNegativeNumbers}
        numberFormatId={fieldData.options.numberFormatId}
        precisionId={fieldData.options.precisionId}
        onChange={({id, number}) => {

            dispatch({
                type: 'UPDATE_NUMBER_CELL',
                payload: {
                    id,
                    number
                }
            })
        }}
    />
))