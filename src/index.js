import React from 'react'
import times from 'lodash/times'
import PropTypes from 'prop-types'
import {css} from 'emotion'

export default class RecordDetail extends React.Component {

    state = {
        id: PropTypes.string.isRequired,
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        data: PropTypes.obj,
        fieldCount: PropTypes.number.isRequired,
        fieldGetter: PropTypes.func.isRequired,
        cellGetter: PropTypes.func.isRequired,
        fieldRenderer: PropTypes.func.isRequired
    }

    render() {

        const {fieldCount, fieldRenderer, fieldGetter, cellGetter, roleId, data} = this.props

        return (
            <div>
                {times(fieldCount).map(index => {

                    const fieldData = fieldGetter({index})
                    const cellData = cellGetter({fieldData, data})

                    return (
                        <div
                            key={index}
                            className={css`
                                padding: 30px 15px;
                                background-color: #fff;
                                border-top: solid 1px #e5e5e5;
                                &:first-of-type {
                                    border-top: none;
                                }
                            `}
                        >
                            <div
                                className={css`
                                    font-weight: bold;
                                    margin-bottom: 8px;
                                `}
                            >
                                {fieldData.name}
                            </div>
                            <div>
                                {fieldRenderer({
                                    id: this.props.id,
                                    fieldData,
                                    cellData,
                                    props: {
                                        id: fieldData.id,
                                        contextId: 'recordDetail',
                                        roleId
                                    }
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}