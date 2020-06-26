import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware  from "redux-thunk";
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootReducer } from '../Reducers/index';

const loggerMiddleware = createLogger();

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);

const Store =
  window.location.hostname === "localhost" ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
    ? createStore(
        persistedReducer,
        compose(
          applyMiddleware(thunkMiddleware, loggerMiddleware),
          (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
          (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        )
      )
    : 
  createStore(persistedReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

let persistor = persistStore(Store);
const dispatch = Store.dispatch;

export { Store, dispatch, persistor };
