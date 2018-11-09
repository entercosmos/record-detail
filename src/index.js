import React from 'react'
import {css} from 'emotion'
import NumberField from '@cmds/number-field'
import CheckboxField from '@cmds/checkbox-field'
import SingleLineTextField from '@cmds/single-line-text-field'
import AttachmentField from '@cmds/attachment-field'

const fieldTypes = {
    checkbox: CheckboxField,
    singleLineText: SingleLineTextField,
    number: NumberField,
    attachment: AttachmentField
}

const connectors = {
    checkbox: ({checked}) => ({
        value: checked
    }),
    singleLineText: ({text}) => ({
        value: text
    }),
    attachment: value => value,
    number: ({number}) => ({
        value: number
    })
}

export default class RecordDetail extends React.Component {

    render() {

        return (
            <div>
                {this.props.fields.map(field => {

                    const Field = fieldTypes[field.typeId]
                    const connector = connectors[field.typeId]
                    const value = this.props.getValue({
                        fieldId: field.id
                    })

                    const props = connector(value)

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
                                    onChange={this.props.onChange}
                                    contextId={'recordDetail'}
                                    roleId={this.props.roleId}
                                    // options={field.options}
                                    {...props}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}