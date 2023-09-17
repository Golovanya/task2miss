const plain = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('author', 'admin');
  res.end('function task(x) {return x* this.x**2} ');
  return { props: {} };
}

export default plain;