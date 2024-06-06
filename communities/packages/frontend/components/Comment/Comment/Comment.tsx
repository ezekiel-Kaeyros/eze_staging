import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { Root, UserName, Container, StyledButton, ContainerActionComment } from './style';
import { Link, Avatar, Confirm, Spacing } from '../../ui';
import { CloseIcon } from '../../ui/icons';
import { RootState } from '../../../store';
import { useNotifications } from '../../../utils';
import Linkify from '../../Linkify';
import { getIdComment } from '../../../store/auth';
import CommentCreate from '../CommentCreate';
import { Item } from '../../ConnexionCard/style';
import Like from '../../Like';
import ReplyComment from './ReplyComment/ReplyComment';

const deleteComment = async (id: string) => {
  const like = await axios.delete('/comments/delete', { data: { id } });
  return like.data;
};

interface CommentProps {
  comment: any;
  author: any;
  queryKey: any;
  post: any;
}

export function parseTextWithLinks(text) {
  // Regular expression to find attributions
  const attributionRegex = /\@\[([^\]]+)\]\(([^)]+)\)/g;

  // Replace attributions with Link components
  const parsedText = text?.replace(attributionRegex, (match, name, id) => {
    return `<a style="text-decoration:none; color:#015E44;"  href='/communities/profile/${id}'>${name}</a>`;
  });
  // Render HTML with Next.js Link components
  return parsedText;
}
const Comment: FC<CommentProps> = ({ comment, author, queryKey, post }) => {

  const idComment = useSelector((state: RootState) => state.auth.idComment);
  const reply = post.comments.filter((item) => item.parentComment == comment._id);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isLike, setIsLike] = useState('');
  const dispatch = useDispatch();
  const authUser = useSelector((state: RootState) => state.auth.user);
  const { mutateAsync } = useMutation(deleteComment);
  const queryClient = useQueryClient();
  const { deleteNotification } = useNotifications();
  const [commentValue, setCommentValue] = useState('');
  const hasLiked = null;
  // const hasLiked = comment.likes.find((post: any) => post === authUser?._id);
  // const view = comment.likes.filter((post: any) => {
  //   console.log(post);
  //   console.log(authUser?._id);

  // });
  const likesLength = comment.likes.length;
  // const commentsLength = post.comments.length;
  const likes = likesLength > 0 ? likesLength + ' likes' : null;
  // const getLikeHandler = (id: string) => {
  //   const reply = post.comments.find((item) => item._id == id);
  //   const likesLength = reply.likes.length;
  //   // const commentsLength = post.comments.length;
  //   const likes = likesLength > 0 ? likesLength + ' likes' : null;
  //   return likes;
  // };
  const likeHandler = () => {
    setIsLike('');
  };
  // const comments = commentsLength > 0 ? commentsLength + ' comments' : null;
  console.log('post', post);
  console.log('hasLiked', author);

  const remove = async () => {
    try {
      const deletedComment = await mutateAsync(comment._id);
      queryClient.setQueryData(queryKey, (existingPosts: any) => {
        if (!existingPosts.pages) {
          return {
            ...existingPosts,
            comments: existingPosts.comments.filter((comment) => comment._id !== deletedComment._id),
          };
        }

        return {
          ...existingPosts,
          pages: existingPosts.pages.map((posts) => {
            return posts.map((p) => {
              if (p._id === post._id) {
                return {
                  ...p,
                  comments: p.comments.filter((comment) => comment._id !== deletedComment._id),
                };
              } else {
                return p;
              }
            });
          }),
        };
      });
      const notification = post.author.notifications.find((n) => n?.comment?._id === deletedComment?._id);
      if (notification) {
        deleteNotification({
          id: notification._id,
          postId: post._id,
          user: post.author,
          queryKey,
        });
      }

      setIsConfirmOpen(false);
    } catch (error) {
      console.error('An error occurred while deleting a comment: ', error);
    }
  };

  return (
    <>
      <Root>
        <Link disableBorderOnHover href={`/communities/profile/${author._id}`}>
          <Avatar image={author?.image} />
        </Link>

        <Container>
          <UserName>
            <Link color="text" weight="bold" size="tiny" href={`/communities/profile/${author._id}`}>
              {author.fullName}
            </Link>
          </UserName>
          <Linkify>
            <div dangerouslySetInnerHTML={{ __html: parseTextWithLinks(comment.comment) }} />
          </Linkify>
        </Container>

        <Confirm
          onConfirm={remove}
          close={() => setIsConfirmOpen(false)}
          isOpen={isConfirmOpen}
          title="Remove the comment permanently?"
        />

        {authUser && authUser._id === author && (
          <StyledButton ghost onClick={() => setIsConfirmOpen(true)}>
            <CloseIcon width="10" />
          </StyledButton>
        )}
      </Root>
      <ContainerActionComment style={{ paddingLeft: '8%' }}>
        {/* <span
          style={{ marginRight: '20px', cursor: 'pointer' }}
          onClick={() => {
            setIsLike(comment._id);
          }}
        >
          like
        </span> */}
        <span
          onClick={() => {
            if (idComment === comment._id) {
              dispatch(getIdComment(''));
            } else {
              dispatch(getIdComment(comment._id.toString()));
            }
          }}
          style={{ cursor: 'pointer', marginRight: '20px' }}
        >
          reply
        </span>
        <div>
          {/* <Like
            queryKey={queryKey}
            post={post}
            hasLiked={hasLiked}
            fullWidth
            withText
            type="reply"
            islike={isLike}
            id={isLike}
            likes={likes}
            likeHandler={likeHandler}
          /> */}
        </div>
        {/* <span>{likes && comment.likes.length}</span>'r */}
      </ContainerActionComment>

      {reply.length > 0 &&
        reply.map((item, index) => {
          return (
            <div style={{ paddingLeft: '8%' }} key={index}>
              <ReplyComment
                comment={item}
                post={post}
                queryKey={queryKey}
                author={item.author}
                id={comment._id}
              ></ReplyComment>
            </div>
          );
        })}
      <Spacing top="xs" left="sm">
        {authUser && idComment && idComment == comment._id && (
          <CommentCreate queryKey={queryKey} post={post} type="reply" id={comment._id} />
        )}
      </Spacing>
    </>
  );
};

export default Comment;
