type Post = {
  id: string;
  title: string;
};

const RouteAPage = async () => {
  const data = await fetch("https://api.vercel.app/blog");
  const posts: Post[] = await data.json();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 font-bold text-4xl text-gray-800">This is RouteA!</h1>
        <p className="text-gray-600 text-lg">
          This page component uses the required default export.
        </p>
      </div>
      <ul className="mx-auto max-w-lg list-inside list-disc space-y-4 rounded-lg bg-gray-100 p-8">
        {posts.map((post) => (
          <li
            key={post.id}
            className="cursor-pointer font-semibold text-gray-800 text-xl transition-colors hover:text-blue-600"
          >
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteAPage;
