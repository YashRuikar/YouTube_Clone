import MainContanier from "./MainContanier"
import Sidebar from "./Sidebar"

const Body = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <MainContanier/>
    </div>
  )
}

export default Body