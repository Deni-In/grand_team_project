import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, CardMedia, Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAllRequests,
  selectAllRequests,
} from "../../../redux/features/requests";
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function ContainerBox(props) {
  const dispatch = useDispatch();

  const requests = useSelector(selectAllRequests);

  useEffect(() => {
    dispatch(loadAllRequests());
  }, [dispatch]);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      <Box data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true"
           className="vc_row wpb_row vc_row-fluid vc_row-no-padding"
           style={{position: 'relative', left: 15, boxSizing: 'border-box', width: 1903}}>
        <Box className="wpb_column vc_column_container vc_col-sm-12">
          <Box className="vc_column-inner">
            <Box className="wpb_wrapper">
              <Box className="page-heading">
                <Box className="breadcrumbs">
                  <Box className="container">
                    <Box className="row">
                      <Box className="col-xs-12">
                        <ul>
                          <li>
                            <NavLink to={'/'} title="Home"
                                 rel="bookmark">
                              Home
                            </NavLink>
                            <span> › </span>
                          </li>
                          <li><a className="text-white">Vehicle Grid</a></li>
                        </ul>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="page-title"><h2>Vehicle Grid</h2></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>



    </>
  );
}

export default ContainerBox;
