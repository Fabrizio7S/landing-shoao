import imagen from "./image.png";

const videos = [
  {
    id: 1,
    title: "Guia Adversary",
    image: imagen,
  },
];

const Videos = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-10">
        <h1  className="text-6xl font-extrebold ">Videos</h1>
        <h2 className="text-4xl text-left   ">
          Guias Boss
        </h2>

        <div className="grid md:grid-cols-3 gap-5 py-10">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full aspect-video object-cover transition duration-500 hover:scale-105"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6">
                  {video.title}
                </h3>

                <a
                  href="https://www.youtube.com/watch?v=MioqDrwyRp8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold hover:text-blue-600"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Videos;