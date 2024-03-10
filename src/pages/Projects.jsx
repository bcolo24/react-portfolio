import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tastebuds from '../assets/Images/tastebuds-app-de96bd264a71.herokuapp.com_app(Pixel 7).png';
import WeatherDashboard from '../assets/Images/weather-dashboard.png'
import NoteTaker from '../assets/Images/note-taker.png'
import ComingSoon from '../assets/Images/coming-soon.png'
import Ecommerce from '../assets/Images/ecommerce.png'
import '../components/Projects.css'
import { light } from '@mui/material/styles/createPalette';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <h1>My Projects</h1>

    <div className='container'>

    <div className='small-container'>
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Tastebuds"
        subheader="January 2024"
      />
      <CardMedia className='card-design'
        component="img"
        height="325"
        image={Tastebuds}
        alt="Screenshot of Tastebuds app"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This app is a great mobile-first recipe sharing site that allows you to create and share cookbooks among other users!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This website was a group effort between my peers for this full-stack project.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className='expanded-title' paragraph>Technologies Used:</Typography>
          <Typography className='expanded-text' paragraph>
            MySQL, HTML, NodeJS, CSS, Handlebars.JS, Postman 
          </Typography>
          <Typography className='expanded-title' paragraph>
            My Role:
          </Typography>
          <Typography className='expanded-text' paragraph>
            The user interface design for the entirety of the app.
          </Typography>
          <Typography className='expanded-title' paragraph>
            Links:
          </Typography>
          <Typography className='expanded-text' paragraph>
          <a href="https://tastebuds-app-de96bd264a71.herokuapp.com/">Deployed Site</a>
          </Typography>
          <Typography className='expanded-text' paragraph>
          <a href="https://github.com/Aaron-Heath/tastebuds.git">Repository</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    
    <div className='small-container2'>
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Five Day Weather Forecast"
        subheader="October 2023"
      />
      <CardMedia className='card-design'
        component="img"
        height="325"
        image={WeatherDashboard}
        alt="Screenshot of Weather app"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This website is a tool that allows the user to search a for city and retrieve the weather forecast for five days in that location.
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className='expanded-title' paragraph>Technologies Used:</Typography>
          <Typography className='expanded-text' paragraph>
            Javascript, APIs, CSS, HTML
          </Typography>
          <Typography className='expanded-title' paragraph>
            Links:
          </Typography>
          <Typography className='expanded-text' paragraph>
          <a href="https://bcolo24.github.io/weather-dashboard/">Deployed Site</a>
          </Typography>
          <Typography className='expanded-text' paragraph>
          <a href="https://github.com/bcolo24/weather-dashboard.git">Repository</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>

    <div className='small-container3'>
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Note Taker App"
        subheader="December 2023"
      />
      <CardMedia className='card-design'
        component="img"
        height="325"
        image={NoteTaker}
        alt="Screenshot of Note Taker app"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Use this app to create, edit, and delete notes!
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className='expanded-title' paragraph>Technologies Used:</Typography>
          <Typography className='expanded-text' paragraph>
            Express.js, HTML, CSS, Postman
          </Typography>
          <Typography className='expanded-title' paragraph>
            Links:
          </Typography>
          <Typography className='expanded-text' paragraph>
          <a href="https://bethanys-express-note-taker-4f2eccaaee1e.herokuapp.com/">Deployed Site</a>
          </Typography>
          <Typography className='expanded-text' paragraph>
          <a href="https://github.com/bcolo24/my-note-taker-app.git">Repository</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    
    <div className='small-container4'>
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardHeader
        title="E-Commerce Backend Example"
        subheader="February 2024"
      />
      <CardMedia className='card-design'
        component="img"
        height="325"
        image={Ecommerce}
        alt="Screenshot of Weather app"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Built the back end conenction for this example of an e-commerce site.
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className='expanded-title' paragraph>Technologies Used:</Typography>
          <Typography className='expanded-text' paragraph>
            Express.js API, MySQL, Postman
          </Typography>
          <Typography className='expanded-title' paragraph>
            Links:
          </Typography>
          <Typography className='expanded-text' paragraph>
          <a href="https://github.com/bcolo24/ORM-ecommerce-backend.git">Repository</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>

    <div className='small-container5'>
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardHeader
        title="More Coming Soon!"
        subheader=""
      />
      <CardMedia className='card-design'
        component="img"
        height="325"
        image={ComingSoon}
        alt="SPicture that says 'coming soon'"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
        </CardContent>
      </Collapse>
    </Card>
    </div>

    <div className='small-container6'>
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardHeader
        title="More Coming Soon!"
        subheader=""
      />
      <CardMedia className='card-design'
        component="img"
        height="325"
        image={ComingSoon}
        alt="Picture that says 'coming soon'"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
        </CardContent>
      </Collapse>
    </Card>
    </div>
  
  
  
  
  
  
  
  
  </div>
  </>
  );
}

// import * as React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';


// export default function TitlebarBelowImageList() {
//   return (
//     <>
   
//         
//         <p>
//           Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
//           Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
//           dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
//           sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
//           sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
//           vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
//           libero. Class aptent taciti sociosqu ad litora torquent per conubia
//           nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
//           lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
//           Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
//           in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
//           bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
//           est ligula suscipit velit, sed bibendum turpis dui in sapien.
//         </p>
      

    
//   </>)
// }

