import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider"


const Tweeder = () => {
            return (


                <div>
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
              Summary
            </Typography>
      
            <p>
            This web app will be a Twitter inspired clone
            </p>
                  <Divider />
            <Typography classes={{ root: "AboutSection" }} variant="h5" gutterBottom>
              Technology stack
            </Typography>
      
      
      
            <ol>
        <li>React JS (Material UI)</li>
        <li>ASP .Net Core API (Drapper ORM)</li>
        <li>Microsoft SQL Server</li>
        <li>Auth0 for authenication</li>
        <li> Azure </li>
        <ol>
          <li>Azure Blob Storage </li>
          <li> SQL DB</li>
        </ol>
      </ol>
      
          </div>

            )


}

export default Tweeder