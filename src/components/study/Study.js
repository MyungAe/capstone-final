import React, { useState } from 'react';
import HeaderNav from '../HeaderNav';
import FooterNav from '../FooterNav';
import ContentWrap from '../ContentWrap';
import SearchIcon from '@mui/icons-material/Search';
import sample from '../../data/sample.json';
import samples2 from '../../data/sample2.json';
import StudyItem from './StudyItem';
import {
  Grid,
  Box,
  Typography,
  Container,
  InputBase,
  IconButton,
  Paper,
} from '@mui/material';

// function CustomizedInputBase() {
//   return (

//   );
// }

const MainPage = () => {
  const [recruitPosts, setRecruitPosts] = useState(sample);
  const [searchParam, setSearchParam] = useState();

  const onChange = (event) => {
    setSearchParam(event.target.value);
    console.log(event.target.value, searchParam);
  };

  // async function getSearchToBackEnd() {
  //   try {
  //     // const response = await axios.get('/search?ID=12345');
  //     // console.log(response);
  //     const response = samples2;
  //     setRecruitPosts(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <>
      <HeaderNav />
      <ContentWrap>
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                스터디 목록
              </Typography>
            </Container>
            <Container maxWidth="sm" align="center">
              <Paper
                component="form"
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: 400,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="나에게 딱 맞는 스터디 그룹을 찾아 보세요."
                  inputProps={{
                    'aria-label': '나에게 딱 맞는 스터디 그룹을 찾아 보세요.',
                  }}
                  onChange={onChange}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      console.log('Enter!!!');
                      setRecruitPosts(samples2);
                      // getSearchToBackEnd();
                    }
                  }}
                />
                <IconButton
                  type="submit"
                  sx={{ p: '10px' }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            {
              <Grid container spacing={4}>
                {recruitPosts.studyList.map(StudyItem)}
              </Grid>
            }
          </Container>
        </main>
      </ContentWrap>
      <FooterNav />
    </>
  );
};

export default MainPage;
