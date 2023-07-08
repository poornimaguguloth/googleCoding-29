// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1 className="home-heading">Home</h1>
      <LogoutButton />
    </div>
  </>
)
export default Home
