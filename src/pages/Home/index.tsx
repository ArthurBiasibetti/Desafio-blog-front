import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { IPost } from '../../interfaces/Ipost';
import Header from '../../components/Header';
import PostService from '../../services/post.service';
import toastMsg, { ToastType } from '../../utils/toastMsg';
import Post from '../../components/Post';
import Loader from '../../components/Loader';

const Home: React.FunctionComponent = () => {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const promise1 = PostService.getAll();

    Promise.all([promise1])
      .then((values) => {
        setPosts(values[0]);
      })
      .catch((error) => {
        toastMsg(ToastType.Error, error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  console.log(posts);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {isLoading && <Loader />}
      <Header />
      <Box sx={{ height: '100%', display: 'flex', flexGrow: 1, padding: '1rem 10%' }}>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item xs={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
