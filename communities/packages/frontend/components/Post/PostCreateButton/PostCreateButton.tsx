import { FC, useState } from 'react';
import { Button, Avatar } from '../../ui';
import { Root, Container, ActivityContainer, DefautlRoot } from './style';
import PostCreate from '../../PostCreate';
import { Channel } from '../../../constants';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { AlertTypes, openAlert } from '../../../store/alert';
import { RootState } from '../../../store';
import PostActivity from '../PostActivity/PostActivity';

interface PostCreateButtonProps {
  channel?: Channel;
  queryKey: any;
}

const PostCreateButton: FC<PostCreateButtonProps> = ({ channel, queryKey }) => {
  const [isPostCreateOpen, setIsPostCreateOpen] = useState(false);
  const authUser = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const channels: Channel[] = queryClient.getQueryData(['channels']);

  const onClick = () => {
    if (Array.isArray(channels) && channels.length > 0) {
      setIsPostCreateOpen(true);
      return;
    }

    dispatch(openAlert({ type: AlertTypes.Error, message: 'To create a post, please first create a channel.' }));
  };

  return (
    <Root>
      <DefautlRoot>
        <Avatar image={authUser?.image} size={2} isOnline />
        {isPostCreateOpen && (
          <PostCreate
            channelId={channel?._id}
            isPostCreateOpen={isPostCreateOpen}
            closePostCreate={() => setIsPostCreateOpen(false)}
            queryKey={queryKey}
          />
        )}
        <Button ghost fullWidth onClick={onClick}>
          <Container>What do you want to talk about?</Container>
        </Button>
      </DefautlRoot>
      <ActivityContainer>
        <PostActivity />
      </ActivityContainer>
    </Root>
  );
};

export default PostCreateButton;
