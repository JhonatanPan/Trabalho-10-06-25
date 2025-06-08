import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PostCard({ post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dados/${post.id}`);
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body2">{post.body.substring(0, 60)}...</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PostCard;