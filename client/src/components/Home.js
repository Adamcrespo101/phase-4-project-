import { Box, Stack} from "@mui/material";
import chalkboard from '../images/chalkboard.jpg'

function Home ({currentUser, radioChange}) {

    

    return (
        <>
          <img src={chalkboard} alt="chalkboard" className="home_img"/>
          <div class='text-on-image'>
        <h1>{`Welcome ${currentUser?.name}`}!</h1>
             {radioChange? 
             <>
             <h3>Head to your profile to edit your personal information, view your student's grades, and add/remove students from your roster.</h3>
             <br></br>
             <h3>Or you can head over to your event calendar to stay up to date on school events and your personal appointments</h3>
             </>
             :
             <>
             <h3>Head to your profile to view your personal information, view your final grades.</h3>
             <br></br>
             <h3>Or you can head over to your event calendar to stay up to date on your upcoming assignments due.</h3>
             </>}
          </div>
      </>
    )
}

export default Home;