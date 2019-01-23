import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ResultContainer.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const convertDate = (date) => (
  new Date(date).toLocaleDateString()
);

const ListItem = (props) => (
    <li className="listItem">
        <Card>
            <CardContent>
                <Typography className="headline" color="textSecondary" gutterBottom>
                    {props.item.headline.main}
                </Typography>
                <Typography className="source" color="textSecondary" gutterBottom>
                    {`${props.item.source} : ${props.item.document_type} : ${convertDate(props.item.pub_date)}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={props.item.web_url} target="_blank">Learn More</Button>
            </CardActions>
        </Card>
    </li>
);
  
function list(list) {
    const listItems = list.map((item) =>
        <ListItem
            key={item._id}
            item={item}
        />
    );
    return (
        <ul className="listContainer">
            {listItems}
        </ul>
    );
}

const ResultContainer = props => (
    <>
      {list(props.list)}
      {
        props.isFetchingAgain
        ? <CircularProgress disableShrink />
        : <Button onClick={props.uploadMore}>Show more</Button>
      }
    </>
);

export default ResultContainer;