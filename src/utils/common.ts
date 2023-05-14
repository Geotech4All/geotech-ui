export function getRandom<Type>(list: Type[]): Type {
  const index = Math.ceil(Math.random() * list.length -1)
  return list[index]
}
