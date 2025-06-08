import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!post) return <Typography>Carregando...</Typography>;

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4">{post.title}</Typography>
        <Typography variant="body1" mt={2}>{post.body}</Typography>
        <Typography variant="caption">ID do Post: {post.id}</Typography>
      </Box>
    </Container>
  );
}

export default PostDetails;