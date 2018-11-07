import React from 'react'
import {css} from 'emotion'
import SingleLineTextField from '@cmds/single-line-text-field'

const fieldTypes = {
    singleLineText: SingleLineTextField
}

export default class RecordDetail extends React.Component {

    render() {

        return (
            <div>
                {this.props.fields.map(field => {

                    const Field = fieldTypes[field.typeId]
                    const value = this.props.getValue({
                        fieldId: field.id
                    })

                    return (
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
                                <Field
                                    id={field.id}
                                    value={value}
                                    onChange={this.props.onChange}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}