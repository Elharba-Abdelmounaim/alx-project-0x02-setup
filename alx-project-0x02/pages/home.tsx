import Card from '@/components/common/Card'  
import React, { useState } from 'react';
import PostModal from '@/components/common/PostModal';



interface Post {
  title: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const addPost = (title: string, content: string) => {
    setPosts(prev => [...prev, { title, content }]);
  };

  return (
    <main className="p-6">
      <button
        onClick={() => setModalOpen(true)}
        className="mb-6 px-4 py-2 bg-green-600 text-black rounded"
      >
        Add Post
      </button>

      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={addPost}
      />

      {posts.length === 0 ? (
        <p>No posts yet. Click "Add Post" to create one.</p>
      ) : (
        posts.map((post, idx) => (
          <div key={idx} className="border border-gray-300 rounded p-4 mb-4 shadow">
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </main>
  );
}
