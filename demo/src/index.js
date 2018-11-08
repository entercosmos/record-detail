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

const log = (name) => (args) => {
    alert(`
name: ${name}
see logs for more info
    `)
    console.log({
        name,
        args
    })
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

const Demo1 = ({roleId}) => (
    <RecordDetail
        roleId={roleId}
        fields={[{
            id: '1',
            name: 'Name',
            typeId: 'singleLineText'
        }, {
            id: '2',
            name: 'Published',
            typeId: 'checkbox'
        }, {
            id: '3',
            name: 'Attachments',
            typeId: 'attachment'
        }]}
        getValue={({fieldId}) => {
            const values = {
                '1': {
                    text: 'Luke Skywalker'
                },
                '2': {
                    checked: true
                },
                '3': {
                    attachments: [{
                        id: '1',
                        mimeType: 'video/ogg',
                        filename: 'Video',
                        thumbnails: null,
                        url: 'https://www.w3schools.com/html/mov_bbb.ogg'
                    }, {
                        id: '2',
                        mimeType: 'audio/mpeg',
                        filename: 'Audio',
                        thumbnails: null,
                        url: 'https://dl.airtable.com/AILblIU3RJfJTtudwUE8_%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97'
                    }, {
                        id: '3',
                        mimeType: 'image/jpeg',
                        filename: `Image`,
                        thumbnails: {
                            small: 'https://placekitten.com/200/300',
                            medium: 'https://placekitten.com/200/300',
                            large: 'https://placekitten.com/200/300',
                        },
                        url: 'https://placekitten.com/200/300'
                    }, {
                        id: '4',
                        mimeType: 'image/gif',
                        filename: 'GIF',
                        thumbnails: {
                            small: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif',
                            medium: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif',
                            large: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif',
                        },
                        url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                    }]
                }
            }
            return values[fieldId]
        }}
        onChange={log('onChange')}
    />
)

class Demo extends Component {
    render() {
        return <div>
            <h1>RecordDetail Demo</h1>
            <h2>Editor role</h2>
            <p>Used for displaying the record for a collaborator with the role editor.</p>
            <Viewport>
                <Demo1
                    roleId={'editor'}
                />
            </Viewport>
            <h2>Read only role</h2>
            <p>Used for displaying the record for a collaborator with the role readOnly.</p>
            <Viewport>
                <Demo1
                    roleId={'readOnly'}
                />
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
