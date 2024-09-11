import Header from "../components/Header"

const Layout = ({ children }) => {
  return (
    <>
    <Header/>
    <div className="container">
      {children}
    </div>
   
    </>
  )
}

export default Layout