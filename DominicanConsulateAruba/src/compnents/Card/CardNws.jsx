import React from 'react'
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import SimpleGrow from "./Grow";
export default function CardNws({title_, img_, content_}) {
    return (
        <SimpleGrow >
        <Card style={{width:'25vw' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={img_}
            height="250"
            image={img_}
            title={img_}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title_}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >
             {content_}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </SimpleGrow>
    )
}
