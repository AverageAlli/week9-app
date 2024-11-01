import { PrismaClient, Video } from '@prisma/client';

const prisma = new PrismaClient();

interface HomeProps {
  videos: Video[]; 
}

export default function Home({ videos }: HomeProps) {
  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.map((video: Video) => ( 
          <li key={video.id}>{video.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const videos = await prisma.video.findMany();

  return {
    props: { videos }, 
  };
}