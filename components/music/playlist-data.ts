export type PlaylistSong = {
  title: string;
  artist: string;
  src: string;
  cover: string;
  duration: string;
};

export const playlist: PlaylistSong[] = [
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    src: "/music/perfect.mp3",
    cover: "/images/perfect.jpg",
    duration: "4:23",
  },
  {
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    src: "/music/until-i-found-you.mp3",
    cover: "/images/until-i-found-you.jpg",
    duration: "2:57",
  },
  {
    title: "Love Me Like You Do",
    artist: "Ellie Goulding",
    src: "/music/love-me-like-you-do.mp3",
    cover: "/images/love-me-like-you-do.jpg",
    duration: "4:10",
  },
];