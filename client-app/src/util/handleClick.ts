export const handleClick = (link: string) => {
  link === '/' ? window.location.replace(link) : window.open(link);
};
