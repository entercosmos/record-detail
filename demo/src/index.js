import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {css, injectGlobal} from 'emotion'
import Select from '@cmds/select'
import fieldRenderer from './fieldRenderer'
import initialState1 from './services/initialState1'
import createStore from './services/createStore'

const store1 = createStore(initialState1)

import RecordDetail from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

class Example extends Component {

    state = {
        roleId: 'editor'
    }

    fieldGetter = ({index}) => {
        const fieldId = this.props.fields.get(index)
        return this.props.fieldsById.get(fieldId).toJS()
    }

    cellGetter = ({fieldData, data}) => {
        return data.cells[fieldData.id]
    }

    render() {
        return <div>
            <h1>RecordDetail Demo</h1>
            <p>Used for displaying the record for a collaborator with the role editor.</p>
            <strong>
                Choose role
            </strong>
            <div className={css`
                height: 40px;
                display: flex;
                width: 220px;
                max-width: 100%;
            `}>
                <Select
                    value={this.state.roleId}
                    options={[{
                        id: 'editor',
                        name: 'editor'
                    }, {
                        id: 'readOnly',
                        name: 'readOnly'
                    }]}
                    onChange={({value}) => this.setState({roleId: value})}
                />
            </div>
            <RecordDetail
                roleId={this.state.roleId}
                data={{
                    cells: this.props.cellsById.toJS()
                }}
                fieldCount={14}
                fieldGetter={this.fieldGetter}
                cellGetter={this.cellGetter}
                fieldRenderer={fieldRenderer}
                visibleFieldOrder={['fld1']}
            />
        </div>
    }
}

Example = connect((state, props) => ({
    cellsById: state.get('cellsById'),
    fieldsById: state.get('fieldsById'),
    fields: state.get('fields')
}))(Example)

class Demo extends React.Component {

    render() {

        return (
            <Provider store={store1}>
                <Example/>
            </Provider>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
