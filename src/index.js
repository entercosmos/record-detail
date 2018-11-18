import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'

export default class RecordDetail extends React.Component {

    state = {
        id: PropTypes.string.isRequired,
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        fields: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            })
        ),
        visibleFieldOrder: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        fieldRenderer: PropTypes.func.isRequired
    }

    render() {

        const {fieldRenderer, visibleFieldOrder} = this.props

        const fieldsById = this.props.fields.reduce((result, field) => {
            result[field.id] = field
            return result
        }, {})

        const fields = visibleFieldOrder.map(id => fieldsById[id])

        return (
            <div>
                {fields.map(field => (
                    <div
                        key={field.id}
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
                            {field.name}
                        </div>
                        <div>
                            {fieldRenderer({
                                id: this.props.id,
                                field,
                                props: {
                                    id: field.id,
                                    contextId: 'recordDetail',
                                    roleId: this.props.roleId
                                }
                            })}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}