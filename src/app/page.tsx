export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/9b1a366d-7799-4fb4-ba12-545cdbe66610-w731gh.png",
    "https://utfs.io/f/9b1a366d-7799-4fb4-ba12-545cdbe66610-w731gh.png",
    "https://utfs.io/f/9b1a366d-7799-4fb4-ba12-545cdbe66610-w731gh.png",
    "https://utfs.io/f/9b1a366d-7799-4fb4-ba12-545cdbe66610-w731gh.png",
    "https://utfs.io/f/9b1a366d-7799-4fb4-ba12-545cdbe66610-w731gh.png",
    "https://utfs.io/f/9b1a366d-7799-4fb4-ba12-545cdbe66610-w731gh.png",
    "https://utfs.io/f/9b1a366d-7799-4fb4-ba12-545cdbe66610-w731gh.png",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image) => (
          <div className="" key={image.id}>
            <img src={image.url} className="w-48" />
          </div>
        ))}
      </div>
      T3 Gallery (in progress)
    </main>
  );
}
