export interface ImageDataType {
  img: string;
  alt: string;
}
export const emptyErrors: ImageDataType[] = [
  {
    img: "/images/not-found.svg",
    alt: "man searching for files",
  },
  {
    img: "/images/empty-lady.svg",
    alt: "lady supriesed at empty folder",
  }
]

