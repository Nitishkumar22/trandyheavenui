import Nav from "@/components/nav/nav";
import Footer from "@/components/footer/footer";
const wrapper = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </>
  );
};

export default wrapper;
