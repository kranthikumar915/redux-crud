// import { configureStore } from "@reduxjs/toolkit";
// import ContactReducer from '../Reducers/ContactReducer'

// //configure store
// const ContactStore = configureStore({
//     reducer:ContactReducer,
//     devTools:true
// })
// export default ContactStore
import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from '../Reducers/ContactReducer'

// config store
const ContactStore = configureStore({
    reducer: ContactReducer,
    devTools: true
})

export default ContactStore