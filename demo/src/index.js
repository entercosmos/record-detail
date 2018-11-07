import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'

import RecordDetail from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const stringifyJSON = (args) => {
    try {
        return JSON.stringify(args, null, 2)
    } catch (e) {
        return null
    }
}

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${stringifyJSON(args)}
    `)
}

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

class Demo extends Component {
    render() {
        return <div>
            <h1>RecordDetail Demo</h1>
            <Viewport>
                <RecordDetail
                    fields={[{
                        id: '1',
                        name: 'First name',
                        typeId: 'singleLineText'
                    }, {
                        id: '2',
                        name: 'Last name',
                        typeId: 'singleLineText'
                    }]}
                    getValue={({fieldId}) => {
                        const values = {
                            '1': 'Luke',
                            '2': 'Skywalker'
                        }
                        return values[fieldId]
                    }}
                    onChange={log('onChange')}
                />
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
