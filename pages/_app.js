// antd
import '../styles/main.scss'
import "tailwindcss/tailwind.css";
import '../node_modules/antd/dist/antd.css';

import { ConfigProvider } from 'antd';

// next
import Router from "next/router"

// redux
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'

// loading
import Loading from '../components/Loading/Loading'

// Router.onRouteChangeStart = url => {
//   Loading.start()
// }

// Router.onRouteChangeComplete = () => Loading.done()

// Router.onRouteChangeError = () => Loading.done()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  )
}

const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
