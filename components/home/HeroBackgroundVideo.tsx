import styles from "@/sections/home/Hero.module.css";

type Props = {
  videoSrc: string;
  poster?: string;
};

export function HeroBackgroundVideo({ videoSrc, poster }: Props) {
  if (!videoSrc) {
    return poster ? (
      // eslint-disable-next-line @next/next/no-img-element -- static poster fallback when CMS video missing
      <img src={poster} alt="" className={styles.bgVideo} aria-hidden />
    ) : null;
  }

  return (
    <video
      className={styles.bgVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
