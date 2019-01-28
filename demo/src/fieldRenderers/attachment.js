import React from 'react'
import uniqueId from 'lodash/uniqueId'
import {connect} from 'react-redux'
import AttachmentField from '@cmds/attachment-field'
import upload from '../fakeUpload'
import randomAttachment from '../randomAttachment'

const mapStateToProps = (state, {cellData}) => {

    return {
        uploading: !!cellData.attachments.find(id => {
            return state.getIn(['attachmentsById', id, 'uploading'])
        }),
        attachments: cellData.attachments.map(id => {
            return state.getIn(['attachmentsById', id]).toJS()
        })
    }
}

export default connect(mapStateToProps)(({props, uploading, attachments, dispatch}) => {

    const handleAttach = async ({files}) => {

        await Promise.all(
            files.map(file => {
                return handleUpload(file)
            })
        )
    }

    const handleUpload = async (file) => {

        const id = uniqueId('att000')

        dispatch({
            type: 'CREATE_ATTACHMENT',
            payload: {
                id: props.id,
                attachment: {
                    id,
                    filename: file.name,
                    progress: 0,
                    uploading: true
                }
            }
        })

        await upload({
            file,
            onProgress: (progress) => {
                dispatch({
                    type: 'SET_PROGRESS_FOR_ATTACHMENT',
                    payload: {
                        id,
                        progress
                    }
                })
            }
        })

        dispatch({
            type: 'UPDATE_ATTACHMENT',
            payload: {
                id,
                attachment: randomAttachment({id})
            }
        })

        dispatch({
            type: 'SET_UPLOADING_FOR_ATTACHMENT',
            payload: {
                id,
                uploading: false
            }
        })
    }

    return (
        <AttachmentField
            {...props}
            attachments={attachments}
            uploading={uploading}
            onCreate={({id}) => {
                console.log('AttachmentField.onCreate', {id})
            }}
            onAttach={handleAttach}
            onRenameAttachment={({id, attachmentId, filename}) => {

                dispatch({
                    type: 'UPDATE_ATTACHMENT_CELL_BY_RENAMING_ATTACHMENT',
                    payload: {
                        id,
                        attachmentId,
                        filename
                    }
                })
            }}
            onRemoveAttachment={({id, attachmentId}) => {

                dispatch({
                    type: 'UPDATE_ATTACHMENT_CELL_BY_REMOVING_ATTACHMENT',
                    payload: {
                        id,
                        attachmentId
                    }
                })
            }}
        />
    )
})