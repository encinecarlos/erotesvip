import React from 'react';
import classes from './Featured.module.css';
import photo from '../../../images/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg';
import FeaturedImage from "../../UI/FeaturedImage/FeaturedImage";
import {Button, Icon} from "semantic-ui-react";

const Featured = (props) => (
    <div className={classes.Hero}>
        <FeaturedImage photo={photo}>
            <div className={classes["featured-horizontal"]}>
                <div className={classes["featured-name"]}>{props.name}</div>
                <div className={classes["featured-info"]}>
                    <div className={classes["featured-diamond"]}>
                        <Icon name='diamond' color='yellow'/>
                    </div>
                    <div className={classes["featured-gender"]}>Female</div>
                    <div className={classes["featured-age"]}>23 Years</div>
                </div>
                <div className={classes["featured-overview"]}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis, deserunt error ex facilis inventore ipsa quos similique? Accusamus dolor doloribus eum in iure laboriosam magni possimus. Incidunt, libero, quos?
                </div>
                <div className={classes["featured-buttons"]}>
                    <Button as='a' color='pink' circular size='big'>
                        <Icon name='eye'/> View Profile
                    </Button>
                </div>
            </div>
        </FeaturedImage>
    </div>
);

export default Featured;



