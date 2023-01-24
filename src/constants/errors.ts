export interface EmptyError {
  img: string;
  alt: string;
  width: number;
  height: number;
}
export const emptyErrors: EmptyError[] = [
  {
    img: "/images/not-found.svg",
    alt: "man searching for files",
    width: 750,
    height: 500
  },
  {
    img: "/images/empty-lady.svg",
    alt: "lady supriesed at empty folder",
    width: 802,
    height: 591
  }
]
