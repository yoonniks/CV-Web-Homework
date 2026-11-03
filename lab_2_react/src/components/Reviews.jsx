import { useState, useEffect } from 'react';

export default function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/15/comments')
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error('Помилка завантаження відгуків:', err));
  }, []);

  return (
    <section id="reviews" className="scroll-mt-20 mb-14">
      <h2 className="inline-block relative text-[1.65rem] font-bold mb-6 z-10 after:content-[''] after:absolute after:bottom-[2px] after:-left-[6px] after:w-[calc(100%+12px)] after:h-[38%] after:-z-10 after:rounded after:-rotate-1 after:bg-[#fbcfe8] dark:after:bg-[#cf2477]">
        Employer Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="p-6 rounded-xl bg-[#ffe8f6]/10 dark:bg-[#1b0014]/40 border border-[#ff66cc]/17 dark:border-white/10 transition duration-300 hover:-translate-y-1 hover:border-[#eb96cd]"
          >
            <span className="inline-block text-[0.75rem] font-bold text-[#eb96cd] bg-transparent border border-[#ff66cc]/17 dark:border-white/10 px-2.5 py-0.5 rounded-full mb-2.5">
              {comment.email}
            </span>
            <h3 className="text-lg font-bold mb-1">{comment.name}</h3>
            <p className="text-[0.925rem] text-[#2d001c] dark:text-[#fbe5f3]">
              {comment.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}