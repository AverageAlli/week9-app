import { PrismaClient } from '@prisma/client'; // Import only PrismaClient

const prisma = new PrismaClient();

export default async function Home() {
  const videos = await prisma.video.findMany(); // TypeScript will infer the type

  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.map((video) => (  // No need for explicit typing here
          <li key={video.id}>{video.name}</li>
        ))}
      </ul>
    </div>
  );
}