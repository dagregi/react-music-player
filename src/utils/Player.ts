const audioRef = useRef<HTMLAudioElement>();

useEffect(() => {
  audioRef.current = new Audio(currentMusic.src);

  // play and pause
  audioRef.current.addEventListener("play", () => {
    setCurrentMusic({ isPlaying: true });
  });
  audioRef.current.addEventListener("pause", () => {
    setCurrentMusic({ isPlaying: false });
  });

  // got to the next music when current one finished
  audioRef.current.addEventListener("ended", (e: any) => {
    skipNext(new URL(e.target.src).pathname);
  });

  //lets trigger when audio is ready
  audioRef.current.addEventListener("canplay", () => {
    audioRef.current?.play();
  });

  // time and duration
  audioRef.current.addEventListener("loadedmetadata", (e: any) => {
    setCurrentMusic({
      curTime: e.target.currentTime,
      duration: e.target.duration,
    });
  });
  audioRef.current.addEventListener("timeupdate", (e: any) => {
    setCurrentMusic({
      curTime: e.target.currentTime,
    });
  });

  return () => {
    audioRef.current?.pause();
  };
}, [currentMusic.src]);

const skipNext = (src: string | undefined) => {
  const idx = playList.findIndex((m) => m.src === src);

  // if we are in last music
  if (idx === playList.length - 1) {
    // go to first one
    setCurrentMusic(playList[0], true);
  } else {
    setCurrentMusic(playList[idx + 1], true);
  }
};

const skipPrev = (src: string | undefined) => {
  const idx = playList.findIndex((m) => m.src === src);

  if (idx === 0) {
    setCurrentMusic(playList[playList.length - 1]);
  } else {
    setCurrentMusic(playList[idx - 1]);
  }
};
