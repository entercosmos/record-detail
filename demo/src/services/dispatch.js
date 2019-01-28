import {fromJS} from 'immutable'

export default (state, action) => {

    switch (action.type) {

        case 'UPDATE_LONG_TEXT_CELL': {

            const {id, longText} = action.payload

            return state.setIn(['cellsById', id, 'longText'], longText)
        }

        case 'UPDATE_SINGLE_LINE_TEXT_CELL': {

            const {id, text} = action.payload

            return state.setIn(['cellsById', id, 'text'], text)
        }

        case 'UPDATE_SINGLE_SELECT_CELL': {

            const {id, optionId} = action.payload

            return state.setIn(['cellsById', id, 'optionId'], optionId)
        }

        case 'UPDATE_CHECKBOX_CELL': {

            const {id, checked} = action.payload

            return state.setIn(['cellsById', id, 'checked'], checked)
        }

        case 'UPDATE_NUMBER_CELL': {

            const {id, number} = action.payload

            return state.setIn(['cellsById', id, 'number'], number)
        }

        case 'UPDATE_ATTACHMENT_CELL_BY_RENAMING_ATTACHMENT': {

            const {id, attachmentId, filename} = action.payload

            return state.setIn(['attachmentsById', attachmentId, 'filename'], filename)
        }

        case 'UPDATE_ATTACHMENT_CELL_BY_REMOVING_ATTACHMENT': {

            const {id, attachmentId} = action.payload

            return state.updateIn(['cellsById', id, 'attachments'], attachments => {
                return attachments.filter(id => {
                    return id !== attachmentId
                })
            })
        }

        case 'CREATE_ATTACHMENT': {
            const {id, attachment} = action.payload
            return state
                .setIn(['attachmentsById', attachment.id], fromJS(attachment))
                .updateIn(['cellsById', id, 'attachments'], attachments => {
                    return attachments.push(attachment.id)
                })
        }

        case 'SET_PROGRESS_FOR_ATTACHMENT': {
            const {id, progress} = action.payload
            return state
                .setIn(['attachmentsById', id, 'progress'], progress)
        }

        case 'SET_UPLOADING_FOR_ATTACHMENT': {
            const {id, uploading} = action.payload
            return state
                .setIn(['attachmentsById', id, 'uploading'], uploading)
        }

        case 'UPDATE_ATTACHMENT': {
            const {id, attachment} = action.payload
            return state
                .updateIn(['attachmentsById', id], a => {
                    return a.merge(attachment)
                })
        }

        case 'UPDATE_LINK_TO_ANOTHER_RECORD_CELL_BY_LINKING_RECORD': {

            const {id, recordId} = action.payload

            return state.updateIn(['cellsById', id, 'records'], records => {
                return records.push(recordId)
            })
        }

        case 'UPDATE_LINK_TO_ANOTHER_RECORD_CELL_BY_UNLINKING_RECORD': {

            const {id, recordId} = action.payload

            return state.updateIn(['cellsById', id, 'records'], records => {
                return records.filter(id => {
                    return id !== recordId
                })
            })
        }

        case 'UPDATE_MULTIPLE_SELECT_CELL_BY_LINKING_OPTION': {

            const {id, optionId} = action.payload

            return state.updateIn(['cellsById', id, 'optionIds'], optionIds => {
                return optionIds.push(optionId)
            })
        }

        case 'UPDATE_MULTIPLE_SELECT_CELL_BY_UNLINKING_OPTION': {

            const {id, optionId} = action.payload

            return state.updateIn(['cellsById', id, 'optionIds'], optionIds => {
                return optionIds.filter(id => {
                    return optionId !== id
                })
            })
        }

        default: {
            return state
        }
    }
}