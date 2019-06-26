export default (state = {
    value1: '',
    isShowGallery: false,
    imgUrl: ''

}, action) => {
    switch (action.type) {
        case 'TOGGLEGALLERY':
            return {
                ...state,
                imgUrl: action.imgUrl,
                isShowGallery: action.isShowGallery

            }
        case 'GETINPUTVALUE':
            return {
                ...state,
                value1: action.value1
            }
        default:
            return state
    }

}