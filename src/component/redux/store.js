import { persistStore } from "redux-persist";
import { applyMiddleware, configureStore, getDefaultMiddleware, createStore } from '@reduxjs/toolkit';
import rootReducer from "./auth/rootReducer";
import logger from 'redux-logger';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
// import contactsReducer from '../redux/contacts/contactsReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];

export const store = configureStore({
    reducer: rootReducer
        // contacts: contactsReducer,
        // auth: rootReducer,

    ,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

// ======================================================================
// Auth

const enhancer = applyMiddleware(...middleware);
const storeAuth = createStore(rootReducer, composeWithDevTools(enhancer));
const persistor = persistStore(storeAuth);
export { persistor };

export default storeAuth;