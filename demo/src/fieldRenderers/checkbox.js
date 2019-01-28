import React from 'react'
import CheckboxField from '@cmds/checkbox-field'
import {connect} from 'react-redux'

export default connect()(({props, cellData, dispatch}) => (
    <CheckboxField
        {...props}
        checked={cellData.checked}
        onChange={({id, checked}) => {

            dispatch({
                type: 'UPDATE_CHECKBOX_CELL',
                payload: {
                    id,
                    checked
                }
            })
        }}
    />
))