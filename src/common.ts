function generateUniqueId(): string {
  let uniq = Date.now()+"";
  for (let i = 0; i < 8; i++) {
    uniq += Math.floor(Math.random() * 10) ;
  }
  return uniq;
}
