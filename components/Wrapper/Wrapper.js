"use client"
import Nav from "@/components/nav/nav";
import Footer from "@/components/footer/footer";
import { store } from '@/store/store'
import { Provider } from 'react-redux'

const wrapper = ({ children }) => {
  return (
    <>
      <Provider store={store}>
          <Nav></Nav>
          {children}
          <Footer></Footer>
      </Provider>

    </>
  );
};

export default wrapper;
