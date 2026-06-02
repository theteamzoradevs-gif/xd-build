const CLOUDINARY_VIDEO_UPLOAD = "/video/upload/";

/** Lighter delivery for hero background video (Cloudinary only). */
export function optimizeCloudinaryVideoUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed.includes("res.cloudinary.com") || !trimmed.includes(CLOUDINARY_VIDEO_UPLOAD)) {
    return trimmed;
  }
  if (/\/video\/upload\/[^/]*q_auto/.test(trimmed)) {
    return trimmed;
  }
  return trimmed.replace(
    CLOUDINARY_VIDEO_UPLOAD,
    `${CLOUDINARY_VIDEO_UPLOAD}q_auto:eco,f_mp4,w_1920,c_limit/`,
  );
}

/** First-frame poster when admin leaves videoPoster empty. */
export function cloudinaryVideoPosterUrl(videoUrl: string): string {
  const trimmed = videoUrl.trim();
  if (!trimmed.includes("res.cloudinary.com") || !trimmed.includes(CLOUDINARY_VIDEO_UPLOAD)) {
    return "";
  }
  return trimmed.replace(
    CLOUDINARY_VIDEO_UPLOAD,
    `${CLOUDINARY_VIDEO_UPLOAD}so_0,q_auto,f_jpg,w_1920,c_limit/`,
  );
}

export function isCloudinaryUrl(url: string): boolean {
  return url.trim().includes("res.cloudinary.com");
}
