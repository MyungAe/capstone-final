import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Chip,
} from '@mui/material';

export default function StudyItem(sample, index) {
  return (
    <Grid item key={index} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link to={`/study/detail`}>
          <CardMedia
            height="140"
            component="img"
            // sx={{
            //   // 16:9
            //   // pt: '56.25%',
            // }}
            image="https://source.unsplash.com/random"
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2" color="black">
              {sample.title.split('#')[0]}
            </Typography>
            <Typography>{sample.contents}</Typography>
          </CardContent>
          <CardActions>
            {sample.topic.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                variant="outlined"
                color="primary"
              />
            ))}
          </CardActions>
        </Link>
      </Card>
    </Grid>
  );
}
