// pages/posts.tsx
import React from 'react';
import PostCard from '../components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      {posts.map(post => (
        <PostCard
          key={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
